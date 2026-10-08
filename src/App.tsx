
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';

interface AppProps {
  /** Starting language for the whole site. The in-page toggle still works. */
  language?: 'en' | 'ar';
  /** Ambient treatment behind the hero. */
  heroBackground?: 'grid' | 'aurora' | 'plain';
}

export function App({ language = 'en', heroBackground = 'grid' }: AppProps) {
  return (
    <LanguageProvider initialLanguage={language}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home heroBackground={heroBackground} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home heroBackground={heroBackground} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>);

}