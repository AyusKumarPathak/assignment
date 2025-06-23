import { useFormikContext, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';

const categories = ['Singers', 'Dancers', 'Speakers', 'DJs'];
const languages = ['English', 'Hindi', 'Telugu', 'Tamil'];
const feeRanges = [
  { label: '20k–50k', value: '20k-50k' },
  { label: '50k–1L', value: '50k-1L' },
  { label: '1L+', value: '1L+' },
];

export default function FormFields() {
  const { values, setFieldValue } = useFormikContext();
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('image', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Multi-select dropdown with checkboxes for Category/Languages
  const MultiSelect = ({ label, name, options }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <label className="font-semibold mb-1 block">{label}</label>
        <button
          type="button"
          className="w-full border rounded-lg px-4 py-2 bg-white/80 text-left"
          onClick={() => setOpen((v) => !v)}
        >
          {values[name]?.length
            ? values[name].join(', ')
            : `Select ${label.toLowerCase()}`}
        </button>
        {open && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-48 overflow-auto">
            {options.map((opt) => (
              <label key={opt} className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={values[name]?.includes(opt)}
                  onChange={() => {
                    if (values[name]?.includes(opt)) {
                      setFieldValue(name, values[name].filter((v) => v !== opt));
                    } else {
                      setFieldValue(name, [...(values[name] || []), opt]);
                    }
                  }}
                  className="accent-indigo-500 mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        )}
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Name */}
      <div>
        <Field name="name" placeholder="Name" className="input w-full" />
        <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
      </div>

      {/* Bio */}
      <div>
        <Field as="textarea" name="bio" placeholder="Bio" className="input w-full min-h-[80px]" />
        <ErrorMessage name="bio" component="div" className="text-red-500 text-sm" />
      </div>

      {/* Category Multi-select */}
      <MultiSelect label="Category" name="category" options={categories} />

      {/* Languages Multi-select */}
      <MultiSelect label="Languages Spoken" name="languages" options={languages} />

      {/* Fee Range Dropdown */}
      <div>
        <label className="font-semibold mb-1 block">Fee Range</label>
        <Field as="select" name="fee" className="input w-full">
          <option value="">Select Fee Range</option>
          {feeRanges.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </Field>
        <ErrorMessage name="fee" component="div" className="text-red-500 text-sm" />
      </div>

      {/* Profile Image Upload */}
      <div>
        <label className="font-semibold mb-1 block">Profile Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 w-24 h-24 rounded-full object-cover border" />
        )}
      </div>

      {/* Location */}
      <div>
        <Field name="location" placeholder="Location" className="input w-full" />
        <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
      </div>
    </div>
  );
}
