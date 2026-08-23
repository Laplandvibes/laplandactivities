import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { getActivitiesByCategory } from '../data/activities';
import { imageForCategory, focalFor } from '../data/images';
import GetYourGuideWidget from '../components/GetYourGuideWidget';
import BookingCTA from '../components/BookingCTA';
import PageBreadcrumb from '../components/PageBreadcrumb';
import TravelInsuranceNote from '../components/TravelInsuranceNote';
import { useLang, useLocalePath } from '../i18n/useLang';
import { COPY } from '../locales/copy';
import { localizeCategory } from '../locales/data';
import { indexGuide } from '../data/guideI18n';

export default function CategoriesIndex() {
  const lang = useLang();
  const to = useLocalePath();
  const c = COPY[lang].categoriesIndex;
  const localized = categories.map((cat) => localizeCategory(cat, lang));
  const hero = localized[0];
  const heroCount = getActivitiesByCategory(hero.slug).length;
  const path = to('/categories');
  const guide = indexGuide('catList', lang);

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <link rel="canonical" href={`https://laplandactivities.fi${path}`.replace(/\/?$/, '/')} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="pt-16 pb-12 bg-deep-night min-h-screen">
        <PageBreadcrumb />
        <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-vibe-pink text-xs font-semibold tracking-[0.25em] uppercase">{c.kicker}</span>
            <h1 className="font-heading text-5xl sm:text-7xl text-snow mt-2 tracking-wide">{c.h1}</h1>
            <p className="text-snow/65 mt-4 max-w-2xl mx-auto text-lg">{c.lead}</p>
          </div>

          {/* Editorial lead — src/data/guides.<lang>.ts, same record the prerenderer
              harvests via routes.json, so crawler and reader see one text. */}
          {guide && (
            <section className="mb-10 sm:mb-14 lv-surface rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl lv-head tracking-wide mb-4">{guide.leadTitle}</h2>
              <p className="text-snow/80 text-sm sm:text-base leading-relaxed mb-4">{guide.lead}</p>
              <p className="text-snow/80 text-sm sm:text-base leading-relaxed">{guide.note}</p>
            </section>
          )}

          {/* Matkavakuutus ja aktiviteettitasot — sisältöosio kumppanilinkillä,
              EI mainoskortti. Tämä sivu on koko sivuston "mitä varaan"
              -pinta, joten "tarkista mitä vakuutuksesi kattaa ennen kuin
              varaat" kuuluu tähän. Ks. komponentin otsikkokommentti —
              jokainen tasoväite on lainattu EKTA:n omalta sivulta. */}
          <section className="mb-10 sm:mb-14 max-w-4xl mx-auto">
            <TravelInsuranceNote sid="categories_insurance" />
          </section>

          <Link
            to={to(`/categories/${hero.slug}`)}
            className="group relative block rounded-2xl overflow-hidden h-72 sm:h-96 mb-6 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
          >
            <img src={imageForCategory(hero.slug)} alt={hero.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: focalFor(imageForCategory(hero.slug)) }} loading="eager" decoding="async" width="1920" height="1080" fetchPriority="high"/>
            <div className="absolute inset-0 bg-gradient-to-r from-deep-night/95 via-deep-night/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-xl">
              <h2 className="font-heading text-4xl sm:text-5xl text-snow tracking-wide mb-2 group-hover:text-vibe-pink transition-colors">{hero.name}</h2>
              <p className="text-snow/65 text-sm sm:text-base leading-relaxed mb-3">{hero.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-snow/75">{heroCount} {c.activitiesLabel}</span>
                <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  {c.exploreAdventures} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localized.slice(1).map((cat) => {
              const count = getActivitiesByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={to(`/categories/${cat.slug}`)}
                  className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 border border-white/10 hover:border-vibe-pink/30 hover:shadow-2xl hover:shadow-vibe-pink/10 transition-all"
                >
                  <img src={imageForCategory(cat.slug)} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition: focalFor(imageForCategory(cat.slug)) }} loading="lazy"  decoding="async" width="800" height="600"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-night/95 via-deep-night/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-heading text-3xl text-snow tracking-wide group-hover:text-vibe-pink transition-colors">{cat.name}</h2>
                    <p className="text-snow/80 text-sm leading-relaxed mb-3 line-clamp-2 mt-1">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-snow/75">{count} {c.activitiesLabel}</span>
                      <span className="text-vibe-pink text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {c.explore} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <GetYourGuideWidget locationId="2652" cmpTag="laplandactivities-categories-auto" title={c.gygTitle} eyebrow={c.gygEyebrow} />
      <BookingCTA sidTag="categories_index" />
    </>
  );
}
