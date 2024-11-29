import React from 'react';

interface TimePickerProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TimePicker({ name, value, onChange }: TimePickerProps) {
  return (
    <input
      type="time"
      name={name}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
      value={value}
      onChange={onChange}
      min="06:00"
      max="23:00"
    />
  );
}