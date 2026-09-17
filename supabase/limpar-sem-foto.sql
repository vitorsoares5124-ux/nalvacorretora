-- Limpeza: remove imóveis que não possuem nenhuma foto.
-- A FK imoveis_imagens.imovel_id tem ON DELETE CASCADE, então as imagens caem junto.

-- 1) Pré-visualizar o que será apagado (rode este trecho antes, se quiser)
-- SELECT i.id, i.titulo, i.is_demo
-- FROM public.imoveis i
-- WHERE NOT EXISTS (
--     SELECT 1 FROM public.imoveis_imagens img WHERE img.imovel_id = i.id
-- );

-- 2) Apagar TODOS os imóveis sem foto
DELETE FROM public.imoveis i
WHERE NOT EXISTS (
    SELECT 1 FROM public.imoveis_imagens img WHERE img.imovel_id = i.id
);

-- 3) Alternativa: apagar somente os fictícios (is_demo = true)
-- DELETE FROM public.imoveis i
-- WHERE i.is_demo = true
--   AND NOT EXISTS (
--     SELECT 1 FROM public.imoveis_imagens img WHERE img.imovel_id = i.id
--   );
