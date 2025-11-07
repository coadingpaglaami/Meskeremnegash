export const TSARegulation = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12 bg-white space-y-8 text-gray-800">
      {/* Header section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          What Is TSA Regulation?
        </h2>
        <p className="leading-relaxed mb-6">
          TSA stands for Transportation Security Administration — it’s a U.S. government agency under the Department of Homeland Security (DHS) responsible for airport and airline security.
        </p>

        <p className="leading-relaxed mb-6">
          TSA regulations are the laws and rules that govern:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>What items are allowed or banned in luggage (carry-on & checked).</li>
          <li>How baggage screening is conducted.</li>
          <li>How passengers and luggage handlers are identified and verified.</li>
          <li>Security standards for airline operations and airport staff.</li>
        </ul>
      </div>

      {/* How It Relates to Your Project (LuggageLinker) */}
      <div>
        <h3 className="text-xl font-semibold mb-4">✈️ How It Relates to Your Project (LuggageLinker)</h3>
        <p className="leading-relaxed mb-6">
          Since LuggageLinker involves travelers carrying packages for others, TSA rules become directly relevant. Here’s how:
        </p>

        <div className="space-y-6">
          {/* Section 1: Prohibited Items */}
          <div>
            <h4 className="text-lg font-semibold mb-2">1. Prohibited Items</h4>
            <p className="leading-relaxed mb-4">
              TSA strictly forbids travelers from carrying the following:
            </p>
            <ul className="list-disc pl-6">
              <li>Explosives</li>
              <li>Weapons</li>
              <li>Flammable materials</li>
              <li>Lithium batteries (in certain conditions)</li>
              <li>Aerosols</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Any package that the traveler did not pack themselves or does not know the contents of can trigger major security flags.
            </p>
            <p className="font-semibold mt-4 text-red-500">🚫 This means:</p>
            <p className="leading-relaxed">
              A traveler cannot legally carry another person’s luggage without knowing exactly what’s inside. 
              → You must build a system that ensures full disclosure of contents and user agreement that all items comply with TSA rules.
            </p>
          </div>

          {/* Section 2: Declaration & Consent */}
          <div>
            <h4 className="text-lg font-semibold mb-2">2. Declaration & Consent</h4>
            <p className="leading-relaxed mb-4">
              TSA requires that:
            </p>
            <ul className="list-disc pl-6">
              <li>Travelers declare what’s in their checked or carry-on luggage.</li>
              <li>Airlines have the right to inspect or reject suspicious items.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              It’s illegal to carry an item on behalf of someone else if you haven’t personally verified what’s inside.
            </p>
            <p className="font-semibold mt-4 text-red-500">✅ In LuggageLinker’s case:</p>
            <p className="leading-relaxed">
              You must include a digital declaration form for:
            </p>
            <ul className="list-disc pl-6">
              <li>Senders to list all item details.</li>
              <li>Travelers to acknowledge they’ve seen or verified the item.</li>
              <li>Both parties to agree to TSA compliance terms before payment.</li>
            </ul>
          </div>

          {/* Section 3: Liability & Verification */}
          <div>
            <h4 className="text-lg font-semibold mb-2">3. Liability & Verification</h4>
            <p className="leading-relaxed mb-4">
              If a traveler is caught with illegal items:
            </p>
            <ul className="list-disc pl-6">
              <li>TSA can detain the traveler.</li>
              <li>The airline can ban them.</li>
              <li>Legal penalties may apply.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              So, the platform should:
            </p>
            <ul className="list-disc pl-6">
              <li>Store sender/traveler ID (KYC).</li>
              <li>Log all package details, photos, and confirmation timestamps.</li>
              <li>Include a legal disclaimer that both parties are responsible for verifying contents.</li>
            </ul>
          </div>

          {/* Section 4: Screening and Inspection */}
          <div>
            <h4 className="text-lg font-semibold mb-2">4. Screening and Inspection</h4>
            <p className="leading-relaxed mb-4">
              All luggage, even from regular passengers, goes through X-ray and chemical scanning by TSA.
            </p>
            <p className="leading-relaxed mt-4">
              So, your system must not bypass normal screening — the traveler still checks in like normal, but must be able to explain the item if asked.
            </p>
          </div>

          {/* Short Summary */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">🔐 In Short</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">No carrying unknown items</span>
                <span>Require item photos & sender declaration</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">TSA inspection rights</span>
                <span>Add consent clause for inspection</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Illegal items banned</span>
                <span>Automated item check with AI filter + manual review</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Liability on traveler</span>
                <span>Digital contract acknowledgment</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">KYC verification</span>
                <span>Use KYC/AML verification APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
