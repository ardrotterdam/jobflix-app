// Volledige Jobflix - GitHub Pages vriendelijk
const { useState } = React;

const App = () => {
  const [activeTab, setActiveTab] = useState('zoeken');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showJobForm, setShowJobForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      titel: 'Frontend Developer',
      bedrijf: 'TechStart Amsterdam',
      locatie: 'Amsterdam',
      salaris: '€3.500 - €5.000',
      type: 'Voltijd',
      categorie: 'IT',
      beschrijving: 'Wij zoeken een ervaren Frontend Developer om ons team te versterken. Je werkt met React, TypeScript en moderne tools voor innovatieve webapplicaties.',
      vereisten: ['3+ jaar ervaring met React', 'TypeScript kennis', 'CSS/SCSS ervaring', 'Git workflow'],
      geplaatst: '2 dagen geleden'
    },
    {
      id: 2,
      titel: 'Marketing Manager',
      bedrijf: 'Growth Company',
      locatie: 'Rotterdam',
      salaris: '€4.000 - €6.000',
      type: 'Voltijd',
      categorie: 'Marketing',
      beschrijving: 'Ervaren Marketing Manager gezocht voor het leiden van marketingcampagnes en teammanagement in een groeiend bedrijf.',
      vereisten: ['5+ jaar marketing ervaring', 'Teamleiding ervaring', 'Digital marketing kennis', 'Google Analytics'],
      geplaatst: '1 dag geleden'
    },
    {
      id: 3,
      titel: 'UX Designer',
      bedrijf: 'Design Studio Utrecht',
      locatie: 'Utrecht',
      salaris: '€3.000 - €4.500',
      type: 'Parttime',
      categorie: 'Design',
      beschrijving: 'Creatieve UX Designer om gebruiksvriendelijke interfaces te ontwerpen voor diverse klanten en projecten.',
      vereisten: ['Portfolio met UX projecten', 'Figma/Sketch ervaring', 'User research ervaring', 'Prototyping skills'],
      geplaatst: '3 dagen geleden'
    }
  ]);

  const categories = ['IT', 'Marketing', 'Design', 'Verkoop', 'HR', 'Finance'];

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.bedrijf.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.beschrijving.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.locatie.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesCategory = !categoryFilter || job.categorie === categoryFilter;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const addJob = (newJobData) => {
    const newJob = {
      id: Date.now(),
      ...newJobData,
      geplaatst: 'Zojuist'
    };
    setJobs([newJob, ...jobs]);
    setShowJobForm(false);
  };

  return React.createElement('div', { className: 'min-h-screen bg-gray-50' },
    // Header
    React.createElement('header', { className: 'bg-white shadow-sm border-b' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
        React.createElement('div', { className: 'flex justify-between items-center h-16' },
          React.createElement('div', { className: 'flex items-center' },
            React.createElement('h1', { className: 'text-2xl font-bold text-red-600' }, 'Jobflix'),
            React.createElement('span', { className: 'ml-2 text-sm text-gray-500' }, 'Jouw nieuwe baan begint hier')
          ),
          React.createElement('nav', { className: 'flex space-x-8' },
            React.createElement('button', {
              onClick: () => setActiveTab('zoeken'),
              className: `px-3 py-2 text-sm font-medium ${activeTab === 'zoeken' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`
            }, '🔍 Zoeken'),
            React.createElement('button', {
              onClick: () => setActiveTab('plaatsen'),
              className: `px-3 py-2 text-sm font-medium ${activeTab === 'plaatsen' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`
            }, '➕ Plaatsen')
          )
        )
      )
    ),

    // Main Content
    React.createElement('main', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' },
      // Zoeken Tab
      activeTab === 'zoeken' && React.createElement('div', {},
        // Search and Filters
        React.createElement('div', { className: 'bg-white rounded-lg shadow-sm p-6 mb-8' },
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
            React.createElement('div', { className: 'relative' },
              React.createElement('input', {
                type: 'text',
                placeholder: 'Zoek naar functie, bedrijf...',
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                className: 'w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              }),
              React.createElement('span', { className: 'absolute left-3 top-3 text-gray-400' }, '🔍')
            ),
            React.createElement('div', { className: 'relative' },
              React.createElement('input', {
                type: 'text',
                placeholder: 'Locatie...',
                value: locationFilter,
                onChange: (e) => setLocationFilter(e.target.value),
                className: 'w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              }),
              React.createElement('span', { className: 'absolute left-3 top-3 text-gray-400' }, '📍')
            ),
            React.createElement('div', { className: 'relative' },
              React.createElement('select', {
                value: categoryFilter,
                onChange: (e) => setCategoryFilter(e.target.value),
                className: 'w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              },
                React.createElement('option', { value: '' }, 'Alle categorieën'),
                ...categories.map(cat => React.createElement('option', { key: cat, value: cat }, cat))
              ),
              React.createElement('span', { className: 'absolute left-3 top-3 text-gray-400' }, '🏷️')
            )
          ),
          React.createElement('div', { className: 'mt-4 text-sm text-gray-600' },
            `${filteredJobs.length} van ${jobs.length} vacatures gevonden`
          )
        ),

        // Jobs List
        React.createElement('div', { className: 'space-y-4' },
          ...filteredJobs.map(job => 
            React.createElement('div', { 
              key: job.id,
              className: 'bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer',
              onClick: () => setSelectedJob(job)
            },
              React.createElement('div', { className: 'flex justify-between items-start mb-4' },
                React.createElement('div', {},
                  React.createElement('h3', { className: 'text-xl font-semibold text-gray-800 mb-1' }, job.titel),
                  React.createElement('p', { className: 'text-gray-600 flex items-center gap-2' },
                    React.createElement('span', {}, '🏢'),
                    job.bedrijf
                  )
                ),
                React.createElement('span', { className: 'bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium' }, job.categorie)
              ),
              React.createElement('p', { className: 'text-gray-600 mb-4' }, job.beschrijving),
              React.createElement('div', { className: 'flex flex-wrap gap-4 text-sm text-gray-500 mb-4' },
                React.createElement('span', { className: 'flex items-center gap-1' },
                  React.createElement('span', {}, '📍'),
                  job.locatie
                ),
                React.createElement('span', { className: 'flex items-center gap-1' },
                  React.createElement('span', {}, '💰'),
                  job.salaris
                ),
                React.createElement('span', { className: 'flex items-center gap-1' },
                  React.createElement('span', {}, '⏰'),
                  job.type
                )
              ),
              React.createElement('div', { className: 'flex justify-between items-center' },
                React.createElement('span', { className: 'text-sm text-gray-400' }, job.geplaatst),
                React.createElement('div', { className: 'flex gap-2' },
                  React.createElement('button', { 
                    className: 'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm',
                    onClick: (e) => { e.stopPropagation(); alert('Sollicitatie ingediend!'); }
                  }, 'Solliciteren'),
                  React.createElement('button', { 
                    className: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors text-sm',
                    onClick: (e) => { e.stopPropagation(); alert('Vacature opgeslagen!'); }
                  }, 'Opslaan')
                )
              )
            )
          ),
          filteredJobs.length === 0 && React.createElement('div', { className: 'text-center py-12' },
            React.createElement('div', { className: 'text-gray-400 mb-4 text-6xl' }, '🔍'),
            React.createElement('h3', { className: 'text-lg font-medium text-gray-600 mb-2' }, 'Geen vacatures gevonden'),
            React.createElement('p', { className: 'text-gray-500' }, 'Probeer je zoekopdracht aan te passen')
          )
        )
      ),

      // Plaatsen Tab  
      activeTab === 'plaatsen' && React.createElement('div', { className: 'max-w-4xl mx-auto' },
        React.createElement('div', { className: 'bg-white rounded-lg shadow-sm p-8' },
          React.createElement('div', { className: 'text-center mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-4' }, 'Plaats je vacature op Jobflix'),
            React.createElement('p', { className: 'text-gray-600 max-w-2xl mx-auto' }, 'Bereik duizenden gekwalificeerde kandidaten en vind de perfecte match voor jouw organisatie.')
          ),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mb-8' },
            React.createElement('div', { className: 'text-center' },
              React.createElement('div', { className: 'bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl' }, '👥'),
              React.createElement('h3', { className: 'font-semibold text-gray-800 mb-2' }, 'Breed Bereik'),
              React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Bereik actieve werkzoekenden in heel Nederland')
            ),
            React.createElement('div', { className: 'text-center' },
              React.createElement('div', { className: 'bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl' }, '🎯'),
              React.createElement('h3', { className: 'font-semibold text-gray-800 mb-2' }, 'Slimme Matching'),
              React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Ons algoritme zorgt voor relevante kandidaten')
            ),
            React.createElement('div', { className: 'text-center' },
              React.createElement('div', { className: 'bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl' }, '⚡'),
              React.createElement('h3', { className: 'font-semibold text-gray-800 mb-2' }, 'Snel Resultaat'),
              React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Binnen 24 uur online en zichtbaar')
            )
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('button', {
              onClick: () => setShowJobForm(true),
              className: 'bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-medium inline-flex items-center gap-2'
            }, '➕ Vacature Plaatsen')
          )
        )
      )
    ),

    // Job Form Modal
    showJobForm && React.createElement(JobForm, { onSubmit: addJob, onClose: () => setShowJobForm(false), categories }),

    // Job Detail Modal
    selectedJob && React.createElement(JobDetail, { job: selectedJob, onClose: () => setSelectedJob(null) })
  );
};

// Job Form Component
const JobForm = ({ onSubmit, onClose, categories }) => {
  const [formData, setFormData] = useState({
    titel: '', bedrijf: '', locatie: '', salaris: '', type: 'Voltijd', categorie: '', beschrijving: '', vereisten: ''
  });

  const handleSubmit = () => {
    if (!formData.titel || !formData.bedrijf || !formData.locatie || !formData.categorie || !formData.beschrijving) {
      alert('Vul alle verplichte velden in');
      return;
    }
    onSubmit({
      ...formData,
      vereisten: formData.vereisten.split('\n').filter(req => req.trim())
    });
  };

  return React.createElement('div', { className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50' },
    React.createElement('div', { className: 'bg-white rounded-lg max-w-2xl w-full max-h-90vh overflow-y-auto' },
      React.createElement('div', { className: 'p-6' },
        React.createElement('div', { className: 'flex justify-between items-center mb-6' },
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-800' }, 'Vacature Plaatsen'),
          React.createElement('button', { onClick: onClose, className: 'text-2xl hover:bg-gray-100 w-8 h-8 rounded' }, '✕')
        ),
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
            React.createElement('div', {},
              React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Functietitel *'),
              React.createElement('input', {
                type: 'text', value: formData.titel,
                onChange: (e) => setFormData({...formData, titel: e.target.value}),
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              })
            ),
            React.createElement('div', {},
              React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Bedrijfsnaam *'),
              React.createElement('input', {
                type: 'text', value: formData.bedrijf,
                onChange: (e) => setFormData({...formData, bedrijf: e.target.value}),
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              })
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
            React.createElement('div', {},
              React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Locatie *'),
              React.createElement('input', {
                type: 'text', value: formData.locatie,
                onChange: (e) => setFormData({...formData, locatie: e.target.value}),
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              })
            ),
            React.createElement('div', {},
              React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Salaris'),
              React.createElement('input', {
                type: 'text', placeholder: 'bijv. €3.000 - €4.000', value: formData.salaris,
                onChange: (e) => setFormData({...formData, salaris: e.target.value}),
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              })
            ),
            React.createElement('div', {},
              React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Type *'),
              React.createElement('select', {
                value: formData.type,
                onChange: (e) => setFormData({...formData, type: e.target.value}),
                className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              },
                React.createElement('option', { value: 'Voltijd' }, 'Voltijd'),
                React.createElement('option', { value: 'Parttime' }, 'Parttime'),
                React.createElement('option', { value: 'Freelance' }, 'Freelance'),
                React.createElement('option', { value: 'Stage' }, 'Stage')
              )
            )
          ),
          React.createElement('div', {},
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Categorie *'),
            React.createElement('select', {
              value: formData.categorie,
              onChange: (e) => setFormData({...formData, categorie: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
            },
              React.createElement('option', { value: '' }, 'Selecteer categorie'),
              ...categories.map(cat => React.createElement('option', { key: cat, value: cat }, cat))
            )
          ),
          React.createElement('div', {},
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Functiebeschrijving *'),
            React.createElement('textarea', {
              rows: 4, value: formData.beschrijving,
              onChange: (e) => setFormData({...formData, beschrijving: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
            })
          ),
          React.createElement('div', {},
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Vereisten (één per regel)'),
            React.createElement('textarea', {
              rows: 3, placeholder: 'Bijv:\n3+ jaar ervaring\nBachelor diploma\nRijbewijs B', value: formData.vereisten,
              onChange: (e) => setFormData({...formData, vereisten: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
            })
          ),
          React.createElement('div', { className: 'flex gap-3 pt-4' },
            React.createElement('button', {
              onClick: handleSubmit,
              className: 'flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors'
            }, 'Vacature Plaatsen'),
            React.createElement('button', {
              onClick: onClose,
              className: 'flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors'
            }, 'Annuleren')
          )
        )
      )
    )
  );
};

// Job Detail Component
const JobDetail = ({ job, onClose }) => 
  React.createElement('div', { className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50' },
    React.createElement('div', { className: 'bg-white rounded-lg max-w-2xl w-full max-h-90vh overflow-y-auto' },
      React.createElement('div', { className: 'p-6' },
        React.createElement('div', { className: 'flex justify-between items-start mb-6' },
          React.createElement('div', {},
            React.createElement('h2', { className: 'text-2xl font-bold text-gray-800 mb-2' }, job.titel),
            React.createElement('p', { className: 'text-lg text-gray-600 flex items-center gap-2' },
              React.createElement('span', {}, '🏢'), job.bedrijf
            )
          ),
          React.createElement('button', { onClick: onClose, className: 'text-2xl hover:bg-gray-100 w-8 h-8 rounded' }, '✕')
        ),
        React.createElement('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-6' },
          React.createElement('div', { className: 'flex items-center gap-2 text-gray-600' },
            React.createElement('span', {}, '📍'), React.createElement('span', { className: 'text-sm' }, job.locatie)
          ),
          React.createElement('div', { className: 'flex items-center gap-2 text-gray-600' },
            React.createElement('span', {}, '💰'), React.createElement('span', { className: 'text-sm' }, job.salaris)
          ),
          React.createElement('div', { className: 'flex items-center gap-2 text-gray-600' },
            React.createElement('span', {}, '⏰'), React.createElement('span', { className: 'text-sm' }, job.type)
          ),
          React.createElement('div', { className: 'flex items-center gap-2 text-gray-600' },
            React.createElement('span', {}, '🏷️'), React.createElement('span', { className: 'text-sm' }, job.categorie)
          )
        ),
        React.createElement('div', { className: 'mb-6' },
          React.createElement('h3', { className: 'text-lg font-semibold text-gray-800 mb-3' }, 'Functiebeschrijving'),
          React.createElement('p', { className: 'text-gray-600 leading-relaxed' }, job.beschrijving)
        ),
        job.vereisten && job.vereisten.length > 0 && React.createElement('div', { className: 'mb-6' },
          React.createElement('h3', { className: 'text-lg font-semibold text-gray-800 mb-3' }, 'Vereisten'),
          React.createElement('ul', { className: 'space-y-2' },
            ...job.vereisten.map((req, index) => 
              React.createElement('li', { key: index, className: 'flex items-start gap-2 text-gray-600' },
                React.createElement('span', { className: 'w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0' }),
                React.createElement('span', {}, req)
              )
            )
          )
        ),
        React.createElement('div', { className: 'flex gap-3 pt-4 border-t' },
          React.createElement('button', { 
            onClick: () => alert('Sollicitatie ingediend!'),
            className: 'flex-1 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium' 
          }, 'Solliciteren'),
          React.createElement('button', { 
            onClick: () => alert('Vacature opgeslagen!'),
            className: 'flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium' 
          }, 'Opslaan')
        )
      )
    )
  );

ReactDOM.render(React.createElement(App), document.getElementById('root'));
