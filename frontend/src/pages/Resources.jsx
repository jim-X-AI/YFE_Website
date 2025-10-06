import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, FileText, Video, Image, File, Folder,
  ExternalLink, Sparkles, LayoutGrid, List, X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');

  const fileTypes = [
    { id: 'all', name: 'All Resources', icon: Folder, color: 'from-blue-500 to-cyan-500' },
    { id: 'pdf', name: 'PDF Documents', icon: FileText, color: 'from-red-500 to-pink-500' },
    { id: 'video', name: 'Videos', icon: Video, color: 'from-purple-500 to-indigo-500' },
    { id: 'image', name: 'Images', icon: Image, color: 'from-green-500 to-teal-500' },
    { id: 'doc', name: 'Documents', icon: File, color: 'from-orange-500 to-amber-500' },
    { id: 'folder', name: 'Folders', icon: Folder, color: 'from-yellow-500 to-orange-400' }
  ];

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      // Fetch resources from local JSON
      try {
        const response = await fetch('/resources.json');
        const data = await response.json();

        // Map the Drive API data to our structure
        const mapped = data.files.map(file => ({
          id: file.id,
          title: file.name,
          type: file.mimeType.includes('pdf')
            ? 'pdf'
            : file.mimeType.includes('video')
            ? 'video'
            : file.mimeType.includes('image')
            ? 'image'
            : file.mimeType.includes('document') || file.mimeType.includes('spreadsheet')
            ? 'doc'
            : file.mimeType.includes('folder')
            ? 'folder'
            : 'file',
          description: file.description || '',
          link: file.webViewLink || file.webContentLink,
          size: file.size ? `${(file.size / 1024).toFixed(1)} KB` : '',
          date: file.modifiedTime || file.createdTime
        }));

        setResources(mapped);
        setFilteredResources(mapped);
      } catch (err) {
        console.error('Failed to fetch resources:', err);
      }
      setLoading(false);
    };
    fetchResources();
  }, []);

  useEffect(() => {
    let filtered = resources;
    if (searchQuery) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedType !== 'all') filtered = filtered.filter(r => r.type === selectedType);
    setFilteredResources(filtered);
  }, [searchQuery, selectedType, resources]);

  const getFileIcon = type => {
    switch (type) {
      case 'pdf': return FileText;
      case 'video': return Video;
      case 'image': return Image;
      case 'doc': return File;
      case 'folder': return Folder;
      default: return File;
    }
  };

  const getTypeColor = type => {
    const t = fileTypes.find(f => f.id === type);
    return t ? t.color : 'from-gray-500 to-gray-600';
  };

  const formatDate = dateStr =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-blue-400 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-600 border-b-purple-400 rounded-full animate-spin animate-reverse"></div>
            <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-blue-500 animate-pulse" />
          </div>
          <p className="mt-4 text-lg text-gray-300">Loading Knowledge Vault...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse delay-1000" />

      <Navbar darkMode />

      {/* Header */}
      <motion.section className="px-6 py-16 text-center relative z-10">
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full text-purple-300 font-medium mb-6 border border-white/20">
          <Sparkles className="w-4 h-4" />
          Digital Knowledge Vault
        </motion.div>
        <motion.h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Resources Hub
        </motion.h1>
        <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Curated collection of premium resources, tutorials, and guides from the YFE community.
        </motion.p>
      </motion.section>

      {/* Controls */}
      <motion.section className="px-6 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/5 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
          {/* Search & View */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 dark:bg-gray-700/40 border border-white/20 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode==='grid'?'bg-white/10':'hover:bg-white/20'} transition-all duration-300`}>
                <LayoutGrid className={`w-5 h-5 ${viewMode==='grid'?'text-blue-500':'text-gray-400'}`} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode==='list'?'bg-white/10':'hover:bg-white/20'} transition-all duration-300`}>
                <List className={`w-5 h-5 ${viewMode==='list'?'text-blue-500':'text-gray-400'}`} />
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {fileTypes.map(type => {
              const Icon = type.icon;
              return (
                <motion.button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedType === type.id
                      ? `bg-gradient-to-r ${type.color} text-white border-transparent shadow-lg`
                      : 'bg-white/10 text-gray-300 border-white/20 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{type.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Resources Grid */}
      <motion.section className="px-6 pb-20 relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <div className="max-w-7xl mx-auto">
          {filteredResources.length === 0 ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center">
                <File className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No resources found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className={viewMode==='grid'?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6":"grid grid-cols-1 gap-4"}>
              <AnimatePresence>
                {filteredResources.map(resource => {
                  const FileIcon = getFileIcon(resource.type);
                  return (
                    <motion.div key={resource.id} variants={itemVariants} layout className={`group relative bg-white/5 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300`} whileHover={{ y: -5, scale: viewMode==='grid'?1.02:1 }}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                      <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(resource.type)} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <FileIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-white mb-2 line-clamp-2 leading-tight">{resource.title}</h3>
                      {resource.description && <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{resource.description}</p>}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        {resource.size && <span>{resource.size}</span>}
                        <span>{formatDate(resource.date)}</span>
                      </div>
                      <motion.a href={resource.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <ExternalLink className="w-4 h-4" />
                        Open Resource
                      </motion.a>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-12 text-gray-400">
            Showing {filteredResources.length} of {resources.length} resources
          </motion.div>
        </div>
      </motion.section>

      <Footer darkMode />
    </div>
  );
};

export default Resources;
