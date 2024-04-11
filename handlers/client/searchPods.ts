const searchPods = async (searchTerm: string) => {
  const res = await fetch(`/api/search?q=${searchTerm}`);
  const data = await res?.json();
  if (!data) return;
  return data;
};

export default searchPods;
