import { Hero } from './components/Hero';
import { ExhibitionInfo } from './components/ExhibitionInfo';
import { Artists } from './components/Artists';
import { Access } from './components/Access';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main>
        <Hero />
        <ExhibitionInfo />
        <Artists />
        <Access />
      </main>
    </div>
  );
}
