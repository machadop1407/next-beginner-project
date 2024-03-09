const getPredictionAge = async (name: string) => {
  const res = await fetch(`http://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictionGender = async (name: string) => {
  const res = await fetch(`http://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictionCountry = async (name: string) => {
  const res = await fetch(`http://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: {
    name: string;
  };
}

export default async function Page({ params }: Params) {
  const [ageData, genderData, countryData] = await Promise.all([
    getPredictionAge(params.name),
    getPredictionGender(params.name),
    getPredictionCountry(params.name),
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Age: {ageData.age}</h1>
      <h1>Gender: {genderData.gender}</h1>
      <h1>Country: {countryData.country}</h1>
    </main>
  );
}