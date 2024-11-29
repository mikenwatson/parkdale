import React from 'react';

interface DatePickerProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DatePicker({ name, value, onChange }: DatePickerProps) {
  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <input
      type="date"
      name={name}
      required
      min={minDate}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
      value={value}
      onChange={onChange}
    />
  );
}