// Simpele werkende versie voor GitHub Pages
const App = () => {
  const [activeTab, setActiveTab] = React.useState('zoeken');
  const [jobs] = React.useState([
    {
      id: 1,
      titel: 'Frontend Developer',
      bedrijf: 'TechStart Amsterdam',
      locatie: 'Amsterdam',
      salaris: '€3.500 - €5.000',
      type: 'Voltijd',
      categorie: 'IT',
      beschrijving: 'Wij zoeken een ervaren Frontend Developer om ons team te versterken.'
    },
    {
      id: 2,
      titel: 'Marketing Manager', 
      bedrijf: 'Growth Company',
      locatie: 'Rotterdam',
      salaris: '€4.000 - €6.000',
      type: 'Voltijd',
      categorie: 'Marketing',
      beschrijving: 'Ervaren Marketing Manager gezocht voor marketingcampagnes.'
    }
  ]);

  return React.createElement('div', { className: 'min-h-screen bg-gray-50' },
    React.createElement('header', { className: 'bg-white shadow-sm border-b p-4' },
      React.createElement('h1', { className: 'text-3xl font-bold text-red-600' }, 'Jobflix'),
      React.createElement('p', { className: 'text-gray-600' }, 'Nederlandse job platform')
    ),
    React.createElement('main', { className: 'max-w-4xl mx-auto p-8' },
      jobs.map(job => 
        React.createElement('div', { 
          key: job.id, 
          className: 'bg-white rounded-lg shadow p-6 mb-4' 
        },
          React.createElement('h2', { className: 'text-xl font-bold mb-2' }, job.titel),
          React.createElement('p', { className: 'text-gray-600 mb-2' }, job.bedrijf + ' - ' + job.locatie),
          React.createElement('p', { className: 'text-green-600 font-semibold mb-2' }, job.salaris),
          React.createElement('p', { className: 'text-gray-700' }, job.beschrijving),
          React.createElement('button', { 
            className: 'mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700' 
          }, 'Solliciteren')
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
