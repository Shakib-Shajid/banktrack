import Card from "./Card";

export default function CardSet({ showLeft }) {
  return (
    <div className="flex space-x-4 mt-4">
      {showLeft ? (
        // Show 3 cards when toggled left
        <>
          <Card />
          <Card />
          <Card />
        </>
      ) : (
        // Show 2 cards when toggled right
        <>
          <Card />
          <Card />
        </>
      )}
    </div>
  );
}
