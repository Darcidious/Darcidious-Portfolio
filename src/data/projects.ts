// src/data/projects.ts
// All gallery entries for the Work page.
// Texture-pass files live alongside their primary renders.
// Videos use the re-encoded copies in /Renders/video/.

export type MediaType = 'image' | 'video'

export interface Project {
  slug: string
  title: string
  category: string
  year: number
  /** Primary display thumbnail (WebP preferred) */
  thumbnail: string
  /** Texture / clay / alternate pass — optional */
  textureThumbnail?: string
  textureLabel?: string
  tags: string[]
  mediaType: MediaType
  /** For videos, the src file path */
  videoSrc?: string
  /** For videos, secondary src file path (like clay pass) */
  textureVideoSrc?: string
  /** For images used in detail view */
  detailImages?: string[]
  description: string
}

const PROJECTS: Project[] = [
  // ── Still renders ────────────────────────────────────────
  {
    slug: 'miniature-cabin',
    title: 'Miniature Cabin',
    category: 'Still Render',
    year: 2024,
    thumbnail: '/Renders/webp/Miniature Cabin.webp',
    textureThumbnail: '/Renders/webp/Miniature Cabin Texture.webp',
    textureLabel: 'Texture',
    tags: ['Blender', 'Compositing', 'Texture'],
    mediaType: 'image',
    detailImages: [
      '/Renders/webp/Miniature Cabin.webp',
      '/Renders/webp/Miniature Cabin Texture.webp',
    ],
    description:
      'I created this photorealistic miniature cabin in Blender complete with full procedural texturing and cinematic compositing.',
  },
  {
    slug: 'nuclear-winter',
    title: 'Nuclear Winter',
    category: 'Still Render',
    year: 2025,
    thumbnail: '/Renders/webp/Nuclear Winter.webp',
    textureThumbnail: '/Renders/webp/Nuclear Winter Texture.webp',
    textureLabel: 'Texture',
    tags: ['Blender', 'VFX', 'Environment'],
    mediaType: 'image',
    detailImages: [
      '/Renders/webp/Nuclear Winter.webp',
      '/Renders/webp/Nuclear Winter Texture.webp',
    ],
    description:
      'I built this post apocalyptic winter environment featuring heavy atmospheric fog particle simulation and multi pass compositing.',
  },
  {
    slug: 'rapunzel-tower',
    title: "Rapunzel's Tower",
    category: 'Still Render',
    year: 2026,
    thumbnail: "/Renders/webp/Rapunzel_s tower.webp",
    textureThumbnail: "/Renders/webp/Rapunzel_s Tower Alternate Angles and Scatter Maps.webp",
    textureLabel: 'Alt / Scatter',
    tags: ['Blender', 'Scatter', 'Compositing'],
    mediaType: 'image',
    detailImages: [
      "/Renders/webp/Rapunzel_s tower.webp",
      "/Renders/webp/Rapunzel_s Tower Alternate Angles and Scatter Maps.webp",
    ],
    description:
      "I designed this stylised tower scene with scatter painted foliage and alternate camera angles.",
  },
  {
    slug: 'ant',
    title: 'Ant',
    category: 'Still Render',
    year: 2025,
    thumbnail: '/Renders/webp/Ant.webp',
    tags: ['Blender', 'Character', 'Rendering'],
    mediaType: 'image',
    detailImages: ['/Renders/webp/Ant.webp'],
    description:
      'I rendered this close up macro shot of a hyper detailed ant with subsurface scattering and micro displacement.',
  },
  {
    slug: 'calendar',
    title: 'Calendar',
    category: 'Still Render',
    year: 2026,
    thumbnail: '/Renders/webp/Calendar.webp',
    tags: ['Blender', 'Product Render'],
    mediaType: 'image',
    detailImages: ['/Renders/webp/Calendar.webp'],
    description: 'I created this clean product render of a desk calendar using soft studio lighting.',
  },

  // ── Video renders ─────────────────────────────────────────
  {
    slug: 'chocolate-pour',
    title: 'Chocolate Pour',
    category: 'Animation',
    year: 2025,
    thumbnail: '/Renders/webp/Ant.webp', // swap for a proper thumbnail if available
    tags: ['Blender', 'Fluid Simulation', 'Animation'],
    mediaType: 'video',
    videoSrc: '/Renders/video/Chocolate pour.mp4',
    description: 'I ran a real time fluid simulation of molten chocolate using Mantaflow in Blender.',
  },
  {
    slug: 'oil-rig',
    title: 'Oil Rig',
    category: 'Animation',
    year: 2026,
    thumbnail: '/Renders/webp/Ant.webp', // Using Ant as fallback since no dedicated still exists
    textureLabel: 'Clay Pass',
    tags: ['Blender', 'Hard Surface', 'Animation'],
    mediaType: 'video',
    videoSrc: '/Renders/video/Oil RIg.mp4',
    textureVideoSrc: '/Renders/video/Oil Rig Clay.mp4',
    description: 'I built this hard surface oil rig environment featuring cinematic camera motion and atmospheric haze. The clay pass was rendered for model review and texture baking reference.',
  },
  {
    slug: 'rave-train',
    title: 'Rave Train',
    category: 'Animation',
    year: 2025,
    thumbnail: '/Renders/webp/Ant.webp', // Using Ant as fallback since no dedicated still exists
    tags: ['Blender', 'Lighting', 'Animation'],
    mediaType: 'video',
    videoSrc: '/Renders/video/Rave Train.mp4',
    description: 'I created this neon lit train interior with volumetric lights particle smoke and a full animation loop.',
  },
]

export default PROJECTS
