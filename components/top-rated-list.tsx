import { ReactNode } from 'react';
import { Star } from 'lucide-react';
import listingsData from '@/data/listings.json';

interface Listing {
  id: string;
  name: string;
  tagline: string;
  category: string;
  rating: number;
}

interface TopRatedListProps {
  category: string;
  title: string;
  limit?: number;
  emptyMessage?: string;
  renderAction?: (business: Listing) => ReactNode;
  className?: string;
}

const baseContainerClass = 'bg-white rounded-2xl p-8 shadow-lg';

const renderStars = (rating: number) => {
  const stars: ReactNode[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} size={14} className="text-amber-400 fill-current" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star size={14} className="text-gray-300" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star size={14} className="text-amber-400 fill-current" />
        </div>
      </div>
    );
  }

  const totalRendered = hasHalfStar ? fullStars + 1 : fullStars;
  for (let i = totalRendered; i < 5; i++) {
    stars.push(
      <Star key={`empty-${i}`} size={14} className="text-gray-300" />
    );
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
};

const formatRating = (rating: number) =>
  Number.isInteger(rating) ? rating.toFixed(0) : rating.toFixed(1);

export const TopRatedList = ({
  category,
  title,
  limit = 5,
  emptyMessage = 'No businesses available in this category yet. Check back soon!',
  renderAction,
  className,
}: TopRatedListProps) => {
  const topListings = (listingsData as Listing[])
    .filter((listing) => listing.category === category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

  const containerClass = className
    ? `${baseContainerClass} ${className}`
    : baseContainerClass;

  return (
    <div className={containerClass}>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      {topListings.length === 0 ? (
        <p className="text-center text-gray-500">{emptyMessage}</p>
      ) : (
        <div className="space-y-4">
          {topListings.map((business, index) => (
            <div
              key={business.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-amber-400 text-black font-bold rounded-full text-sm">
                  {index + 1}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{business.name}</span>
                  <p className="text-sm text-gray-600">{business.tagline}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {renderStars(business.rating)}
                {renderAction ? (
                  renderAction(business)
                ) : (
                  <span className="font-semibold text-gray-900">{formatRating(business.rating)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
