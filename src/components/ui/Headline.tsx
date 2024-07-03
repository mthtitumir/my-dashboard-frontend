const Headline = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-white tracking-wider">
        {text}
      </h1>
    </div>
  );
};

export default Headline;
