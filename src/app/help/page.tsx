export default function HelpPage() {
  return (
    <main className="flex-1 flex flex-col bg-zinc-50 min-h-screen pb-20">
      <section className="bg-white py-16 px-8 md:px-16 border-b border-zinc-100 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Getting Started with Saily</h1>
          <p className="text-lg text-zinc-600">Find answers to commonly asked questions, learn how to set up your eSIM, and get ready for your trip.</p>
        </div>
      </section>

      <div className="max-w-3xl w-full mx-auto px-6">
        
        {/* Section 1: Setting up */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-saily">⚙️</span> Setting up
          </h2>
          <div className="flex flex-col gap-4">
            
            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                What is Apple's "Hide My Email" and where to find your Saily account email?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                If you use "Sign in with Apple", Apple may generate a proxy email. You can find this proxy email in your iPhone's Settings &gt; Apple ID &gt; Password &amp; Security &gt; Apps Using Apple ID.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How do I install the Saily App on my device?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                You can download the Saily App directly from the Apple App Store for iOS devices, or the Google Play Store for Android. Just search for "Saily eSIM" and hit install.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How to log in to a Saily account
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Open the app and select "Log In". You can use Google, Apple, or just a standard email. A verification link will be sent to your email to securely log you in without a password.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How to create a Saily account
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Creating an account is automatic when you purchase your first eSIM or download the app. Simply sign up using your email, Google, or Apple ID.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How to use a Saily coupon/voucher code
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                During the checkout process, look for the "Have a promo code?" button below the total price. Tap it, enter your code, and the discount will be applied instantly.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                Does Saily provide bundle/regional plans?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Yes! We offer regional plans (like Europe, Asia, Latin America) and global plans that cover over 100+ countries, so you don't have to buy a new eSIM for every border you cross.
              </div>
            </details>

          </div>
        </div>

        {/* Section 2: Using Saily eSIM */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-saily">📱</span> Using Saily eSIM
          </h2>
          <div className="flex flex-col gap-4">
            
            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                Saily usage and commonly asked questions
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Your eSIM connects to the internet without removing your physical SIM. Just ensure data roaming is enabled for your Saily eSIM profile in your phone's settings.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                Saily basics and functionality
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Saily allows you to access data globally. It is data-only, meaning standard phone calls and SMS via your regular number still use your primary carrier, but you can use WhatsApp, Facetime, or Skype through Saily.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How do I get an additional Saily eSIM?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                If you are traveling to a new country or your current plan expires, simply purchase a new plan in the app. Saily makes it easy to hold multiple active profiles simultaneously.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                What is Saily Auto Top-Up?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Auto Top-Up automatically buys more data for you right before your current plan runs out, ensuring you never lose connection in the middle of a trip. You can toggle this feature on or off in the app.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                What is Saily Ad Blocker?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                We provide an integrated, DNS-level ad blocker to save your precious data by preventing heavy, unwanted ads from loading while you travel.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                What are Saily virtual locations?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                By routing your traffic through specific servers, virtual locations can help you access local content securely as if you were physically located in that region.
              </div>
            </details>

          </div>
        </div>

        {/* Section 3: Device compatibility */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-saily">🔍</span> Device compatibility
          </h2>
          <div className="flex flex-col gap-4">
            
            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                How to check if my device is eSIM compatible?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Most modern devices (iPhone 11+, Samsung Galaxy S21+, Pixel 4+) support eSIM. You can check by going into your device settings under "Cellular" or "Network & Internet" and looking for an option to "Add eSIM" or "Add Cellular Plan".
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden open:shadow-md transition-all">
              <summary className="flex items-center justify-between font-bold cursor-pointer p-6 list-none hover:bg-zinc-50 transition-colors">
                Can I use Saily if my device doesn't support eSIM?
                <span className="transition group-open:rotate-180 text-zinc-400">▼</span>
              </summary>
              <div className="text-zinc-600 px-6 pb-6 pt-2 leading-relaxed border-t border-zinc-100 mt-2">
                Unfortunately, Saily is exclusively designed for eSIM-compatible devices. We do not provide physical SIM cards at this time.
              </div>
            </details>

          </div>
        </div>

      </div>
    </main>
  );
}
