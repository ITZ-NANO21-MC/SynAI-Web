'use server';
/**
 * @fileOverview Un agente de IA para generar metadatos SEO optimizados.
 *
 * - generateSeoMetadata - Una función que maneja el proceso de generación de metadatos SEO.
 * - GenerateSeoMetadataInput - El tipo de entrada para la función generateSeoMetadata.
 * - GenerateSeoMetadataOutput - El tipo de retorno para la función generateSeoMetadata.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * @interface GenerateSeoMetadataInput
 * @property {string} content - El contenido principal de la página o elemento del portafolio.
 * @property {string[]} keywords - Palabras clave relevantes para la optimización SEO.
 * @property {string} pageType - El tipo de página (ej. 'homepage', 'service page', 'portfolio item') para guiar la generación.
 */
const GenerateSeoMetadataInputSchema = z.object({
  content: z
    .string()
    .describe('El contenido principal de la página o elemento del portafolio.'),
  keywords: z
    .array(z.string())
    .describe('Palabras clave relevantes para la optimización SEO.'),
  pageType: z
    .string()
    .describe(
      "El tipo de página (ej. 'homepage', 'service page', 'portfolio item') para guiar la generación."
    ),
});
export type GenerateSeoMetadataInput = z.infer<
  typeof GenerateSeoMetadataInputSchema
>;

/**
 * @interface GenerateSeoMetadataOutput
 * @property {string} metaTitle - El título meta generado, optimizado para SEO (idealmente <60 caracteres).
 * @property {string} metaDescription - La descripción meta generada, optimizada para SEO (idealmente <160 caracteres).
 */
const GenerateSeoMetadataOutputSchema = z.object({
  metaTitle: z
    .string()
    .describe(
      'El título meta generado, optimizado para SEO (idealmente <60 caracteres).'
    ),
  metaDescription: z
    .string()
    .describe(
      'La descripción meta generada, optimizado para SEO (idealmente <160 caracteres).'
    ),
});
export type GenerateSeoMetadataOutput = z.infer<
  typeof GenerateSeoMetadataOutputSchema
>;

/**
 * Función envoltorio para el flujo de Genkit `generateSeoMetadataFlow`.
 * @param {GenerateSeoMetadataInput} input - Los datos de entrada para la generación de metadatos SEO.
 * @returns {Promise<GenerateSeoMetadataOutput>} - Los metadatos SEO generados.
 */
export async function generateSeoMetadata(
  input: GenerateSeoMetadataInput
): Promise<GenerateSeoMetadataOutput> {
  return generateSeoMetadataFlow(input);
}

/**
 * Define un prompt de IA para generar títulos y descripciones meta optimizados para SEO.
 */
const generateSeoMetadataPrompt = ai.definePrompt({
  name: 'generateSeoMetadataPrompt',
  input: {schema: GenerateSeoMetadataInputSchema},
  output: {schema: GenerateSeoMetadataOutputSchema},
  prompt: `Eres un experto en SEO encargado de generar títulos meta y descripciones meta para una página web.

Tu objetivo es crear un 'metaTitle' y un 'metaDescription' que sean altamente relevantes, atractivos y optimizados para los motores de búsqueda, con el fin de mejorar la visibilidad y el porcentaje de clics.

Reglas:
- El 'metaTitle' debe tener menos de 60 caracteres.
- La 'metaDescription' debe tener menos de 160 caracteres.
- Incorpora de forma natural las 'keywords' proporcionadas.
- Adapta el tono y el contenido basándote en el 'pageType' para reflejar el propósito de la página.
- Enfócate en el beneficio para el usuario y fomenta la acción.

Contenido de la página: {{{content}}}
Palabras clave: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Tipo de página: {{{pageType}}}
`,
});

/**
 * Define un flujo de Genkit para generar metadatos SEO.
 * Este flujo utiliza el prompt `generateSeoMetadataPrompt` para generar el título y la descripción meta.
 */
const generateSeoMetadataFlow = ai.defineFlow(
  {
    name: 'generateSeoMetadataFlow',
    inputSchema: GenerateSeoMetadataInputSchema,
    outputSchema: GenerateSeoMetadataOutputSchema,
  },
  async input => {
    const {output} = await generateSeoMetadataPrompt(input);
    if (!output) {
      throw new Error('La generación de metadatos SEO no produjo ningún resultado.');
    }
    return output;
  }
);
