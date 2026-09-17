-- Corrige imagens cujos IDs do Unsplash foram removidos (retornavam 404).
-- Substituídas por fotos válidas do Pexels (mesmo host já liberado no next.config).
-- Rode no SQL Editor do Supabase.

-- Aparecia nos imóveis 5, 15, 25, 35, 45
UPDATE public.imoveis_imagens
SET url = 'https://images.pexels.com/photos/4913326/pexels-photo-4913326.jpeg?auto=compress&cs=tinysrgb&w=1600'
WHERE url = 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80';

-- Aparecia nos imóveis 6, 16, 26, 36, 46
UPDATE public.imoveis_imagens
SET url = 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600'
WHERE url = 'https://images.unsplash.com/photo-1600607687979-247fb4591ff1?auto=format&fit=crop&w=1600&q=80';

-- Aparecia nos imóveis 10, 20, 30, 40, 50
UPDATE public.imoveis_imagens
SET url = 'https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1600'
WHERE url = 'https://images.unsplash.com/photo-1502005229762-ee152f90e5f2?auto=format&fit=crop&w=1600&q=80';
