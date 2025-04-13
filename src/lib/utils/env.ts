"use server";

export const getENV = async (key: string) => {
  const value = process.env[key];

  if (!value) throw new Error(`Environment variable ${key} is not set`);

  return value;
};
