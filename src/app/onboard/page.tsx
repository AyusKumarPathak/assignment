'use client';

import { Formik, Form } from 'formik';
import { artistSchema } from '../utils/validation';
import FormFields from '../components/FormFields';

const initialValues = {
  name: '',
  bio: '',
  category: [],
  languages: [],
  fee: '',
  image: null,
  location: '',
};

export default function OnboardFormPage() {
  const handleSubmit = (values, { resetForm }) => {
    // For demo, just log. Replace with API call as needed.
    console.log('Submitted Artist:', values);
    alert('Artist submitted successfully');
    resetForm();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f3ff] via-[#e8eafc] to-[#fbeffb] py-8 px-2">
      <div className="w-full max-w-xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent font-serif drop-shadow-lg">
          Artist Onboarding
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={artistSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <FormFields />
            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
