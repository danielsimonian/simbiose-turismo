import { heroImages } from '@/lib/data';

export default function Gallery() {
  const galleryImages = [
    { url: heroImages[0], caption: 'Cavernas Milenares', category: 'Cavernas' },
    { url: heroImages[1], caption: 'Cachoeiras Cristalinas', category: 'Cachoeiras' },
    { url: heroImages[2], caption: 'Mata Atlântica Preservada', category: 'Natureza' },
    { url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop', caption: 'Formações Rochosas', category: 'Cavernas' },
    { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop', caption: 'Trilhas Ecológicas', category: 'Trilhas' },
    { url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format&fit=crop', caption: 'Quedas D\'água', category: 'Cachoeiras' }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Conheça o PETAR</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubra as belezas naturais que te esperam nesta aventura única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img 
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-2">{image.category}</span>
                  <h3 className="text-white text-xl font-bold">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}