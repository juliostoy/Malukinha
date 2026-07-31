import React from 'react';
import {
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Star,
  Instagram,
  PartyPopper,
  Sparkles,
  ArrowUpRight,
  Utensils,
  CheckCircle2,
  PackageCheck,
  Camera,
  Maximize2,
  X,
  Filter,
  Store,
  ShoppingBag,
  Eye
} from 'lucide-react';

import heroBg from './assets/images/malukinha_hero_bg_1784819726517.jpg';
import packagingImg from './assets/images/malukinha_packaging_1784819737835.jpg';
import facadeBg from './assets/images/malukinha_facada_storefront_1784820794853.jpg';
import partyDecorImg from './assets/images/malukinha_party_decor_1784819748861.jpg';
import logoImg from './assets/images/malukinha_brand_logo_1784892003810.png';
import storeAislesImg from './assets/images/malukinha_store_aisles_1784894793141.jpg';
import partyBalloonsWallImg from './assets/images/party_wall_balloons_1784895609150.jpg';
import balloonWallDisplayImg from './assets/images/joy_balloons_stitch_spiderman_wall_1784908414621.jpg';
import kraftBagsShelvesImg from './assets/images/kraft_bags_delivery_shelves_1784908963591.jpg';
import plasticContainersShelvesImg from './assets/images/potes_plasticos_descartaveis_shelves_1784909309345.jpg';

const WHATSAPP_NUMBER = '5541996943135';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site da Malukinha Embalagens e gostaria de fazer um orçamento.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const MAPS_URL = 'https://maps.google.com/?q=Av.+Argentina,+135+-+Jardim+Rio+Verde,+Colombo+-+PR,+83405-420';
const INSTAGRAM_URL = 'https://www.instagram.com/malukinha_embalagens/';

export interface StoreLocation {
  id: 'rio-verde' | 'sao-gabriel';
  name: 'Unidade Rio Verde' | 'Unidade São Gabriel';
  neighborhood: string;
  address: string;
  cityStateZip: string;
  fullAddress: string;
  mapsUrl: string;
  embedMapUrl: string;
  phone: string;
  hours: string;
  badge: string;
}

const STORES: StoreLocation[] = [
  {
    id: 'rio-verde',
    name: 'Unidade Rio Verde',
    neighborhood: 'Rio Verde',
    address: 'Av. Argentina, 135',
    cityStateZip: 'Rio Verde, Colombo - PR, 83405-420',
    fullAddress: 'Av. Argentina, 135 - Rio Verde, Colombo - PR',
    mapsUrl: 'https://maps.google.com/?q=Av.+Argentina,+135+-+Jardim+Rio+Verde,+Colombo+-+PR,+83405-420',
    embedMapUrl: 'https://maps.google.com/maps?q=Av.+Argentina,+135+-+Jardim+Rio+Verde,+Colombo+-+PR,+83405-420&t=&z=16&ie=UTF8&iwloc=&output=embed',
    phone: '(41) 99694-3135',
    hours: 'Segunda a Sábado • Aberto até 19:00',
    badge: 'Rio Verde'
  },
  {
    id: 'sao-gabriel',
    name: 'Unidade São Gabriel',
    neighborhood: 'São Gabriel',
    address: 'Rua André Skrok, 26 - Loja 06',
    cityStateZip: 'São Gabriel, Colombo - PR, 83406-000',
    fullAddress: 'Rua André Skrok, 26 - Loja 06 - São Gabriel, Colombo - PR',
    mapsUrl: 'https://maps.google.com/?q=Rua+Andr%C3%A9+Skrok,+26+-+Loja+06+-+S%C3%A3o+Gabriel,+Colombo+-+PR',
    embedMapUrl: 'https://maps.google.com/maps?q=Rua+Andr%C3%A9+Skrok,+26+-+Loja+06+-+S%C3%A3o+Gabriel,+Colombo+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed',
    phone: '(41) 99694-3135',
    hours: 'Segunda a Sábado • Horário Comercial',
    badge: 'São Gabriel • Loja 06'
  }
];

const galleryPhotos = [
  {
    id: 1,
    title: 'Fachada e Entrada da Loja',
    category: 'loja',
    categoryLabel: 'Nossa Loja',
    image: facadeBg,
    description: 'Fachada da Malukinha na Av. Argentina, 135 - Rio Verde em Colombo, PR. Localização acessível com vagas em frente.',
    badge: 'Colombo, PR'
  },
  {
    id: 2,
    title: 'Potes, Marmitas & Embalagens Descartáveis',
    category: 'produtos',
    categoryLabel: 'Produtos',
    image: plasticContainersShelvesImg,
    description: 'Potes retangulares, potes plásticos com tampa, copos descartáveis, recipientes para molhos e caixas para embalar.',
    badge: 'Pronta Entrega'
  },
  {
    id: 3,
    title: 'Acessórios e Artigos de Festas',
    category: 'festas',
    categoryLabel: 'Festas',
    image: partyBalloonsWallImg,
    description: 'Parede repleta de pacotes de balões JOY de todas as cores, painéis decorativos temáticos infantis (Mundo Bita, Patrulha Canina, Vingadores) e artigos para aniversários.',
    badge: 'Balões & Painéis'
  },
  {
    id: 4,
    title: 'Estrutura Interna e Corredores da Loja',
    category: 'loja',
    categoryLabel: 'Nossa Loja',
    image: storeAislesImg,
    description: 'Corredores organizados com prateleiras repletas de produtos descartáveis, embalagens e artigos de festas no Rio Verde.',
    badge: 'Interior da Loja'
  },
  {
    id: 5,
    title: 'Sacolas Kraft e Embalagens',
    category: 'produtos',
    categoryLabel: 'Produtos',
    image: kraftBagsShelvesImg,
    description: 'Estoque completo de sacolas kraft SOS delivery, sacolas de papel, copos e potes plásticos com preços claros e facilidade de escolha.',
    badge: 'Linha Kraft & Delivery'
  },
  {
    id: 6,
    title: 'Balões e Enfeites',
    category: 'festas',
    categoryLabel: 'Festas',
    image: balloonWallDisplayImg,
    description: 'Expositor completo com balões JOY em diversas cores e tamanhos, cortinas metalizadas, topo de bolo e painéis de personagens infantis como Homem-Aranha e Stitch.',
    badge: 'Artigos de Festa'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = React.useState<'todos' | 'produtos' | 'festas' | 'loja'>('todos');
  const [selectedPhoto, setSelectedPhoto] = React.useState<typeof galleryPhotos[0] | null>(null);
  const [selectedStoreId, setSelectedStoreId] = React.useState<'rio-verde' | 'sao-gabriel'>('rio-verde');

  const activeStore = STORES.find(s => s.id === selectedStoreId) || STORES[0];

  const filteredPhotos = activeCategory === 'todos'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-orange-500 selection:text-black flex flex-col justify-between">
      {/* HEADER - LARANJA & VERDE */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 flex justify-between items-center px-6 sm:px-10 border-b border-white/10 glass">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center p-0.5 shadow-md shadow-orange-500/20 transition-transform group-hover:scale-105 overflow-hidden border border-orange-500/30 shrink-0">
            <img
              src={logoImg}
              alt="Malukinha Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-xl font-display font-bold tracking-tighter uppercase italic text-orange-400 block">
              Malukinha
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400 font-bold block -mt-1">
              Embalagens & Festas
            </span>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold opacity-80">
          <a href="#hero" className="hover:opacity-100 hover:text-orange-400 transition-colors">Início</a>
          <a href="#galeria" className="hover:opacity-100 hover:text-orange-400 transition-colors">Fotos da Loja</a>
          <a href="#depoimentos" className="hover:opacity-100 hover:text-orange-400 transition-colors">Avaliações</a>
          <a href="#localizacao" className="hover:opacity-100 hover:text-orange-400 transition-colors">Localização</a>
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden sm:inline text-xs font-semibold opacity-80 text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            (41) 99694-3135
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-emerald-500/25"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>FALE CONOSCO</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION - MARCA EM LARANJA & VERDE */}
      <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10 overflow-hidden">
        {/* Foto da fachada no fundo com maior visibilidade e suavidade no gradiente */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={facadeBg}
            alt="Fachada Malukinha Embalagens e Artigos para Festas em Colombo"
            className="w-full h-full object-cover object-center opacity-75 scale-100 transition-opacity duration-500"
          />
          {/* Suave gradiente preto para preservar a leitura do texto sem escurecer demais a imagem */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            
            {/* Title & Copy */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass w-fit mb-6 border border-orange-500/30">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">
                  5.0 ★ no Google • 2 Lojas em Colombo: Rio Verde & São Gabriel
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tighter mb-6 uppercase text-white">
                VARIEDADE E <br />
                <span className="text-orange-400">QUALIDADE</span> EM <br />
                <span className="text-emerald-400"> Colombo.</span>
              </h1>

              <p className="text-base sm:text-lg opacity-80 max-w-xl font-light leading-relaxed mb-8">
                Tudo em embalagens descartáveis, potes, sacolas kraft, recipientes para alimentação e artigos completos para festas nas nossas unidades do Rio Verde e São Gabriel.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-black hover:bg-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Fazer Pedido no WhatsApp</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 border border-white/15 text-white"
                >
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Ver Endereço</span>
                </a>
              </div>

              {/* Badges */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-[11px] uppercase tracking-wider opacity-70">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Pronta Entrega</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Atendimento Personalizado</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Preço Imbatível</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS DA LOJA E PRODUTOS */}
      <section id="galeria" className="py-20 lg:py-28 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-bold mb-2 flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                Galeria de Fotos
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-white">
                Fotos da <span className="italic text-emerald-400">Loja & Produtos</span>
              </h2>
            </div>
            <p className="text-xs opacity-70 uppercase tracking-widest max-w-sm">
              Conheça nossa estrutura física no Rio Verde em Colombo e veja a variedade de produtos disponíveis.
            </p>
          </div>

          {/* Categorias / Filtros */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-white/10">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'todos'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Todas as Fotos</span>
            </button>

            <button
              onClick={() => setActiveCategory('loja')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'loja'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Nossa Loja & Fachada</span>
            </button>

            <button
              onClick={() => setActiveCategory('produtos')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'produtos'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Embalagens & Potes</span>
            </button>

            <button
              onClick={() => setActiveCategory('festas')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeCategory === 'festas'
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Artigos de Festa</span>
            </button>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group glass rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black/60 backdrop-blur-md text-orange-400 border border-orange-500/30">
                    {photo.badge}
                  </span>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                      {photo.categoryLabel}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-white leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between border-t border-white/10">
                  <p className="text-xs text-white/70 line-clamp-1 pr-2">
                    {photo.description}
                  </p>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ampliar <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>

      {/* LIGHTBOX MODAL DE FOTO */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full glass rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-orange-500 hover:text-black transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem Ampliada */}
            <div className="md:w-3/5 relative min-h-[300px] md:min-h-[450px] overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover absolute inset-0"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Detalhes da Foto */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#0a0a0a]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                    {selectedPhoto.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-semibold text-white mb-4">
                  {selectedPhoto.title}
                </h3>

                <p className="text-sm opacity-80 leading-relaxed font-light mb-6">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre "${selectedPhoto.title}" que vi no site.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-full text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar no WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full py-3 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-white"
                >
                  Fechar Visualização
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEPOIMENTOS REAL DO GOOGLE */}
      <section id="depoimentos" className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-bold block mb-2">
              Opinião dos Nossos Clientes
            </span>
            <h2 className="font-display text-3xl font-normal text-white">
              Quem Conhece <span className="italic text-emerald-400">Recomenda</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-orange-500/30 transition-all">
              <div>
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm italic opacity-85 font-light mb-6">
                  &ldquo;Variedades de produtos e diferentes tipos de embalagens.&rdquo;
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-orange-400 font-semibold">Cliente Google • Colombo, PR</p>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
              <div>
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm italic opacity-85 font-light mb-6">
                  &ldquo;Loja com muita variedade.&rdquo;
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">Cliente Google • Colombo, PR</p>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-orange-500/30 transition-all">
              <div>
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm italic opacity-85 font-light mb-6">
                  &ldquo;Tem tudo o que você precisa em um só lugar.&rdquo;
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-orange-400 font-semibold">Cliente Google • Colombo, PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E CONTATO - 2 UNIDADES */}
      <section id="localizacao" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-bold mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Nossas Unidades em Colombo
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-white mb-3">
              Visite Nossas <span className="italic text-emerald-400">Lojas Físicas</span>
            </h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Temos duas unidades estrategicamente localizadas em Colombo para melhor te atender: Rio Verde e São Gabriel. Escolha a mais próxima!
            </p>
          </div>

          {/* Seletor de Unidade (Abas) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {STORES.map((store) => {
              const isSelected = store.id === selectedStoreId;
              return (
                <button
                  key={store.id}
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all flex items-center gap-2.5 border ${
                    isSelected
                      ? 'bg-orange-500 text-black border-orange-400 shadow-xl shadow-orange-500/25 scale-105'
                      : 'glass text-white/80 border-white/10 hover:border-orange-500/40 hover:text-white'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>{store.name}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${isSelected ? 'bg-black/20 text-black' : 'bg-orange-500/20 text-orange-400'}`}>
                    {store.neighborhood}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Lista com os 2 cards de Lojas */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {STORES.map((store) => {
                const isSelected = store.id === selectedStoreId;
                return (
                  <div
                    key={store.id}
                    onClick={() => setSelectedStoreId(store.id)}
                    className={`p-6 rounded-3xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'glass bg-orange-500/10 border-orange-500/60 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/40'
                        : 'glass border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isSelected ? 'bg-orange-500 text-black' : 'bg-white/10 text-orange-400'
                      }`}>
                        {store.badge}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          Exibindo no Mapa
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl text-white font-bold mb-2 flex items-center gap-2">
                      <Store className="w-4 h-4 text-orange-400" />
                      {store.name}
                    </h3>

                    <div className="space-y-2 text-xs opacity-90 mt-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{store.fullAddress}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>{store.hours}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Atendimento Whats</span>
                      </a>

                      <a
                        href={store.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] uppercase tracking-widest font-extrabold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                      >
                        <span>Abrir GPS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}

              <div className="p-4 rounded-2xl glass border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white font-bold">Dúvida sobre estoque em cada unidade?</p>
                  <p className="text-[11px] opacity-70">Fale com nossa equipe no WhatsApp!</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-extrabold uppercase tracking-wider rounded-full shrink-0 shadow-md"
                >
                  Consultar
                </a>
              </div>
            </div>

            {/* MAPA INTERATIVO DINÂMICO DO GOOGLE MAPS */}
            <div className="lg:col-span-7 glass rounded-[36px] border border-orange-500/30 overflow-hidden relative shadow-2xl min-h-[420px] lg:min-h-[520px] flex flex-col group">
              <iframe
                key={activeStore.id}
                title={`Mapa Interativo - ${activeStore.name}`}
                src={activeStore.embedMapUrl}
                className="w-full h-full min-h-[420px] lg:min-h-[520px] border-0 contrast-125 opacity-90 group-hover:opacity-100 transition-opacity flex-1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Tag / Overlay sobre o Mapa */}
              <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full border border-orange-500/30 backdrop-blur-md flex items-center gap-2 text-white pointer-events-none shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400">
                  {activeStore.name} • Colombo PR
                </span>
              </div>

              {/* Botão para Traçar Rota / Abrir Google Maps */}
              <a
                href={activeStore.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-5 py-2.5 bg-black/80 hover:bg-orange-500 hover:text-black text-white font-extrabold rounded-full text-[10px] uppercase tracking-widest transition-all backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-lg"
              >
                <span>Rota para {activeStore.neighborhood}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t border-white/10 bg-white/[0.02] px-6 sm:px-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase tracking-[0.3em] font-bold opacity-50 text-orange-400">
            <span>Embalagens Descartáveis</span>
            <span>Artigos para Festa</span>
            <span>Suprimentos para Comércio</span>
          </div>
          <div className="text-[9px] opacity-50 uppercase tracking-widest font-bold text-center md:text-right space-y-0.5">
            <p>© 2026 Malukinha Embalagens & Festas • Colombo, PR</p>
            <p className="text-[8px] opacity-70">
              Unidade 1: Av. Argentina, 135 - Rio Verde | Unidade 2: Rua André Skrok, 26, Lj 06 - São Gabriel
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP - VERDE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black p-4 rounded-full shadow-2xl shadow-emerald-500/40 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-extrabold text-black pl-1">
          Falar no WhatsApp
        </span>
        <MessageCircle className="w-6 h-6 fill-current text-black shrink-0" />
      </a>
    </div>
  );
}
