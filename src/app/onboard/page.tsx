'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';

type Artist = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
};

const initialValues: Artist = {
  name: '',
  bio: '',
  category: [],
  languages: [],
  fee: '',
  location: '',
};

export default function OnboardFormPage() {
  const categories = ['Singers', 'Dancers', 'Speakers', 'DJs'];
  const languages = ['English', 'Hindi', 'Telugu', 'Tamil'];

  const handleSubmit = (values: Artist) => {
    console.log('Submitted artist:', values);
    alert('Artist submitted successfully');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f3ff] via-[#e8eafc] to-[#fbeffb] py-8 px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent font-serif drop-shadow">
          Artist Onboarding
        </h2>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className="space-y-6">
              {/* Name */}
              <div>
                <Field name="name" placeholder="Name" className="input w-full" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Bio */}
              <div>
                <Field as="textarea" name="bio" placeholder="Bio" rows={4} className="input w-full" />
                <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Category */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <label key={cat} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value={cat}
                        checked={values.category.includes(cat)}
                        onChange={handleChange}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">Languages</label>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <label key={lang} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="languages"
                        value={lang}
                        checked={values.languages.includes(lang)}
                        onChange={handleChange}
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>

              {/* Fee */}
              <div>
                <Field as="select" name="fee" className="input w-full">
                  <option value="">Select Fee</option>
                  <option value="20k-50k">20k–50k</option>
                  <option value="50k-1L">50k–1L</option>
                  <option value="1L+">1L+</option>
                </Field>
              </div>

              {/* Location */}
              <div>
                <Field name="location" placeholder="Location" className="input w-full" />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white font-semibold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
