export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Lumiya</h1>
      <p className="text-lg text-slate-700 mb-6">GDPR-native automation in 60 s</p>
      <a
        href="https://buy.stripe.com/test_..." // replace later
        className="rounded bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700"
      >
        Start beta – 9 € / month
      </a>
    </main>
  );
}
