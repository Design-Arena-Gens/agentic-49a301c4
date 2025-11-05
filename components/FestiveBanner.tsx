export default function FestiveBanner() {
  return (
    <div className="bg-gradient-to-r from-sandstone-200 via-sandstone-300 to-sandstone-200">
      <div className="container-width py-3 flex items-center justify-between">
        <p className="text-sm md:text-base font-medium text-clay-800">
          ? Festive Collections now available ? limited edition diyas and lamps!
        </p>
        <a href="#shop" className="hidden md:inline-flex btn btn-ghost">Shop Festive</a>
      </div>
    </div>
  );
}
