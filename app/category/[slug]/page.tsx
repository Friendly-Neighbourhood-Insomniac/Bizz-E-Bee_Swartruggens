import { notFound } from 'next/navigation';
import { SectionHeader } from '@/components/section-header';
import { ListingCarousel } from '@/components/listing-carousel';
import { TopRatedList } from '@/components/top-rated-list';
import categories from '@/data/categories.json';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const filterOptions = [
  { label: 'Open Now', active: false },
  { label: 'Top Rated', active: true },
  { label: 'Pro', active: false },
];

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Get top 5 businesses for this category, sorted by rating
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <SectionHeader
              title={category.label}
              subtitle={`Discover the best ${category.label.toLowerCase()} businesses in Swartruggens`}
              centered
            />
          </div>

          {/* Filter Pills */}
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-white rounded-full p-2 shadow-sm border border-gray-200">
              {filterOptions.map((filter) => (
                <button
                  key={filter.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter.active
                      ? 'bg-amber-400 text-black shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Business Carousel */}
          <div>
            <ListingCarousel category={category.slug} />
          </div>

          {/* Top Rated Businesses List */}
          <TopRatedList
            category={category.slug}
            title={`Top Rated ${category.label} Businesses`}
          />
        </div>
      </div>
    </div>
  );
}