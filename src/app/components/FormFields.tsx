'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';

type ArtistFormData = {
  name: string;
  bio: string;
  category: string[]; 
  languages: string[]; 
  fee: string;
  location: string;
};

type Props = {
  register: UseFormRegister<ArtistFormData>;
  errors: FieldErrors<ArtistFormData>;
};

export default function FormFields({ register, errors }: Props) {
  const categories = ['Singers', 'Dancers', 'Speakers', 'DJs'];
  const languages = ['English', 'Hindi', 'Telugu', 'Tamil'];

  return (
    <div className="space-y-6">
      {/* Name */}
      <div>
        <input {...register('name')} placeholder="Name" className="input w-full" />
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      </div>

      {/* Bio */}
      <div>
        <textarea {...register('bio')} placeholder="Bio" className="input w-full" rows={4} />
        <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
      </div>

      {/* Categories */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Category</label>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <label key={cat} className="inline-flex items-center gap-2">
              <input type="checkbox" value={cat} {...register('category')} />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
      </div>

      {/* Languages */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Languages</label>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <label key={lang} className="inline-flex items-center gap-2">
              <input type="checkbox" value={lang} {...register('languages')} />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
      </div>

      {/* Fee */}
      <div>
        <select {...register('fee')} className="input w-full">
          <option value="">Select Fee</option>
          <option value="20k-50k">20k–50k</option>
          <option value="50k-1L">50k–1L</option>
          <option value="1L+">1L+</option>
        </select>
        <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
      </div>

      {/* Location */}
      <div>
        <input {...register('location')} placeholder="Location" className="input w-full" />
        <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
      </div>
    </div>
  );
}
