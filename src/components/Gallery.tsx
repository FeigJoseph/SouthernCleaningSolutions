import React, { useState } from "react";
import { X } from "lucide-react";
import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";
import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";
import before3 from "../assets/before3.png";
import after3 from "../assets/after3.png";
import before4 from "../assets/before4.png";
import after4 from "../assets/after4.png";
import glassdoor1 from "../assets/glassdoor1.png";
import glassdoor2 from "../assets/glassdoor2.png";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const images: GalleryImage[] = [
    {
      src: before1,
      alt: "Before1",
      category: "before",
    },
    {
      src: after1,
      alt: "After1",
      category: "after",
    },
    {
      src: before2,
      alt: "Before2",
      category: "before",
    },
    {
      src: after2,
      alt: "After2",
      category: "after",
    },
    {
      src: before3,
      alt: "Before3",
      category: "before",
    },
    {
      src: after3,
      alt: "After3",
      category: "after",
    },
    {
      src: before4,
      alt: "Before4",
      category: "before",
    },
    {
      src: after4,
      alt: "After4",
      category: "after",
    },
    {
      src: glassdoor1,
      alt: "GlassDoor1",
      category: "glassdoors",
    },
    {
      src: glassdoor2,
      alt: "GlassDoor2",
      category: "glassdoors",
    },
  ];

  const categories = ["all", "before", "after"];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent projects and the quality of work
            we deliver.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />

              {/* Small badge for before/after images */}
              {(image.category === "before" || image.category === "after") && (
                <div
                  className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded"
                  aria-hidden="true"
                >
                  {image.category === "before" ? "Before" : "After"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-screen">
              <button
                className="absolute top-4 right-4 p-2 bg-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Badge in modal for before/after */}
              {(selectedImage.category === "before" ||
                selectedImage.category === "after") && (
                <div
                  className="absolute bottom-8 right-8 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded"
                  aria-hidden="true"
                >
                  {selectedImage.category === "before" ? "Before" : "After"}
                </div>
              )}

              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
