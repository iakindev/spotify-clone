import Card from './Card';

export default {
  title: 'Card',
};

export const card: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
    >
      <div style={{ display: 'block' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(164px, 1fr))',
            columnGap: 48,
          }}
        >
          <Card
            song={{
              _id: 'story_id_1',
              name: 'Title',
              artist: 'Artist',
              cover: 'https://via.placeholder.com/150',
            }}
          />
        </div>
      </div>
    </div>
  );
};
