import ReactOriginal from 'react';

const React = {
  ...ReactOriginal,
  createElement: (type, props, ...children) => {
    let resolvedChildren = children;
    if (children.length === 1 && Array.isArray(children[0])) {
      resolvedChildren = children[0];
    }
    const keyedChildren = resolvedChildren.map((child, idx) => {
      if (ReactOriginal.isValidElement(child) && child.key === null) {
        return ReactOriginal.cloneElement(child, { key: `k-${idx}` });
      }
      return child;
    });
    let resolvedProps = props || {};
    if (resolvedProps.children && Array.isArray(resolvedProps.children)) {
      resolvedProps = {
        ...resolvedProps,
        children: resolvedProps.children.map((child, idx) => {
          if (ReactOriginal.isValidElement(child) && child.key === null) {
            return ReactOriginal.cloneElement(child, { key: `k-${idx}` });
          }
          return child;
        })
      };
    }
    return ReactOriginal.createElement(type, resolvedProps, ...keyedChildren);
  }
};

export const journalDays = [
  {
    n: "01",
    title: "Resistors, Ohm's Law, KCL & KVL",
    subtitle: "Dr. Anand — HOD ECE, IIIT Kottayam",
    tags: ["Network Theory","Resistors","Ohm's Law","Kirchhoff"],
    accent: "rust",
    blocks: [
      {
        label: "Course Overview",
        body: React.createElement("p", {}, ["Core areas covered: ", React.createElement("strong", {}, "Network Theory"), ", ", React.createElement("strong", {}, "Circuits & Networks"), ",", " ", React.createElement("strong", {}, "Basic Electronics"), ", and ", React.createElement("strong", {}, "Rectification"), ". Real-world example: understanding the hardware inside a heart-rate monitor."]),
      },
      {
        label: "Rectification & Inside the Charger",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Studied the internal components of a charger — a full-wave rectifier passing through a", " ", React.createElement("strong", {}, "bridge rectifier"), " to produce half-wave output, then filtered through", " ", React.createElement("strong", {}, "RC, RLC, or LC filters"), " (R = Resistance, L = Inductance, C = Capacitor)."]), React.createElement("div", {"className":"callout tip"}, [React.createElement("div", {"className":"callout-label"}, "Key Insight"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "RC filter"), " is the most efficient. Output starts as fluctuating DC, converted by the rectifier into actual DC. A ", React.createElement("strong", {}, "potential / voltage divider"), " (e.g., 12V → 5V) works using resistances."])])]),
      },
      {
        label: "Resistors",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["A resistor ", React.createElement("strong", {}, "doesn't have polarity"), " — it's a two-terminal device measured in ohms. Modern electronics uses surface-mount resistors on boards."]), React.createElement("p", {"className":"scribble"}, "Resistor Color Code: B B R O Y G B V G W — S G"), React.createElement("div", {"className":"color-band"}, [React.createElement("span", {"style":{"background":"#000","color":"#fff"}}, "B"), React.createElement("span", {"style":{"background":"#964B00","color":"#fff"}}, "B"), React.createElement("span", {"style":{"background":"#f00","color":"#fff"}}, "R"), React.createElement("span", {"style":{"background":"#ff8c00","color":"#fff"}}, "O"), React.createElement("span", {"style":{"background":"#ff0","color":"#000"}}, "Y"), React.createElement("span", {"style":{"background":"#0f0","color":"#000"}}, "G"), React.createElement("span", {"style":{"background":"#00f","color":"#fff"}}, "B"), React.createElement("span", {"style":{"background":"#8B00FF","color":"#fff"}}, "V"), React.createElement("span", {"style":{"background":"#808080","color":"#fff"}}, "G"), React.createElement("span", {"style":{"background":"#fff","color":"#000"}}, "W")]), React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Series & Parallel"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Series:"), " current is same, voltage differs. R_total = R₁ + R₂ + …", React.createElement("br", {}, null), React.createElement("strong", {}, "Parallel:"), " voltage is same, current differs. 1/R_total = 1/R₁ + 1/R₂ + …"])])]),
      },
      {
        label: "Ohm's Law",
        body: React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "⚡ Formula"), React.createElement("div", {"className":"callout-text"}, ["V = R × I  (at constant temperature)", React.createElement("br", {}, null), React.createElement("br", {}, null), "Ammeter → connected in ", React.createElement("strong", {}, "Series"), React.createElement("br", {}, null), "Voltmeter → connected in ", React.createElement("strong", {}, "Parallel")])]),
      },
      {
        label: "Kirchhoff's Laws",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "KCL — Kirchhoff's Current Law"), React.createElement("div", {"className":"callout-text"}, "Total current entering a node = total current leaving the node.")]), React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "KVL — Kirchhoff's Voltage Law"), React.createElement("div", {"className":"callout-text"}, "Total voltage rise across a closed loop = total voltage drop.")])]),
      },
      {
        label: "Voltage & Current Divider Rules",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Voltage Divider"), React.createElement("div", {"className":"callout-text"}, ["V(R₁) = R₁ / (R₁ + R₂) × V_total", React.createElement("br", {}, null), "Example: 12V → 5V using two resistors"])]), React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Current Divider"), React.createElement("div", {"className":"callout-text"}, "Works inversely — verify theoretically and practically using simulators.")])]),
      },
      {
        label: "Advanced Analysis (Afternoon)",
        body: React.createElement("p", {}, ["Topics covered post-lunch (1:00 PM): ", React.createElement("strong", {}, "Nodal Analysis"), ",", " ", React.createElement("strong", {}, "Super-Mesh Analysis"), ", ", React.createElement("strong", {}, "Super-Node Analysis"), ",", " ", React.createElement("strong", {}, "Superposition Principle"), ", and various ", React.createElement("strong", {}, "Network Theorems"), "."]),
      },
      {
        exercises: ["Use online simulators or virtual labs to verify circuit behaviour","Practice resistor colour-code identification","Calculate effective resistance in series & parallel circuits with currents","Solve problems on Ohm's Law, KCL, KVL, CDR, VDR (try with ChatGPT and simulators)"],
      },
    ],
  },
  {
    n: "02",
    title: "Diodes & Rectifiers",
    subtitle: "Dr. Anand — HOD ECE, IIIT Kottayam",
    tags: ["Diodes","Rectifiers","Applications"],
    accent: "rust",
    blocks: [
      {
        label: "Diodes",
        body: React.createElement("p", {}, ["Studied the ", React.createElement("strong", {}, "V–I characteristics"), " of a diode — how current flows in forward bias and gets blocked in reverse bias. Explored using a ", React.createElement("strong", {}, "diode as a switch"), " in circuits."]),
      },
      {
        label: "Rectifiers",
        body: React.createElement("p", {}, ["Built understanding of ", React.createElement("strong", {}, "half-wave rectifiers"), " and", " ", React.createElement("strong", {}, "full-wave rectifiers"), " — how diodes convert AC to pulsating DC. Explored bridge rectifier configurations."]),
      },
      {
        label: "Other Applications",
        body: React.createElement("p", {}, ["Explored additional uses: ", React.createElement("strong", {}, "clamper circuits"), " and", " ", React.createElement("strong", {}, "switch regulators"), ". These are critical in power-supply design and signal conditioning."]),
      },
      {
        exercises: ["Plot the V–I characteristics of a diode","Demonstrate diode as a switch","Build a half-wave rectifier circuit","Explain how a diode works in a full-wave rectifier","Research clamper and switch-regulator circuits"],
      },
      {
        scribble: "Session wrapped up at 12:30 PM",
      },
    ],
  },
  {
    n: "03",
    title: "Computer Networks & VS Code Setup",
    subtitle: "Session 1 & 2 — IIIT Kottayam",
    tags: ["IEEE 802.3","IEEE 802.11","Data Comm","Dev Setup"],
    accent: "gold",
    blocks: [
      {
        label: "Session 1 — Dev Environment Setup",
        body: React.createElement("p", {}, ["Installed ", React.createElement("strong", {}, "VS Code"), " inside a virtual machine for coding and programming. Set up the workspace for future lab sessions."]),
      },
      {
        label: "Session 2 — Computer Networks",
        body: React.createElement("p", {}, ["Introduction to basic concepts of computer networks. Covered ", React.createElement("strong", {}, "IEEE 802.3"), " ", "(Ethernet) and ", React.createElement("strong", {}, "IEEE 802.11"), " (Wi-Fi) standards — their basics and connection types."]),
      },
      {
        label: "Data Communications",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Explored the ", React.createElement("strong", {}, "five components"), " of data communication:"]), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Sender"), React.createElement("p", {}, "The device that sends the data message, using protocols to structure it.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Medium"), React.createElement("p", {}, "The physical path by which the message travels from sender to receiver.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Message"), React.createElement("p", {}, "The information (data) to be communicated.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Receiver"), React.createElement("p", {}, "The device that receives the message, using protocols to decode it.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Protocol"), React.createElement("p", {}, "The set of rules governing data communication between sender and receiver.")])])]),
      },
    ],
  },
  {
    n: "04",
    title: "IoT Fundamentals & M2M Applications",
    subtitle: "Shajulin Sir — 13/04/2026",
    tags: ["IoT","M2M","Smart Systems","Research"],
    accent: "sage",
    blocks: [
      {
        label: "Popular M2M Applications",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "🏥 Healthcare"), React.createElement("p", {}, "Health and wellbeing monitoring systems")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "🏠 Smart Homes"), React.createElement("p", {}, "Intelligent wearable security systems")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "🏭 IIoT"), React.createElement("p", {}, "Logistics and cargo handling operations")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "🚗 ITS"), React.createElement("p", {}, "Automated traffic-control solutions")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "🛒 Smart Retail"), React.createElement("p", {}, "Asset management, tracking, smart displays")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "💳 Smart Payments"), React.createElement("p", {}, "Cash payment and inventory management")])]),
      },
      {
        label: "IoT Subsets",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Subset"), React.createElement("th", {}, "Focus Area")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "IIoT")), React.createElement("td", {}, "Industrial — smart factories, logistics")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "CIoT")), React.createElement("td", {}, "Consumer — wearables, gadgets")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Space-IoT")), React.createElement("td", {}, "Overcoming terrestrial coverage limitations")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "IoM")), React.createElement("td", {}, "Internet of Mirrors — beauty & healthcare")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "IIoMT")), React.createElement("td", {}, "Intelligent Internet of Medical Things")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "NSAIoT")), React.createElement("td", {}, "Neuro-symbolic AI + IoT for trustworthiness")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "ITS")), React.createElement("td", {}, "AI-driven traffic, road safety, pedestrian prediction")])])]),
      },
      {
        label: "Research Domains & Challenges",
        body: React.createElement("p", {}, ["Key challenge: achieving a ", React.createElement("strong", {}, "trustworthy IoT ecosystem"), " through advanced AI integration. Major application domains include ", React.createElement("strong", {}, "Smart Cities"), ",", " ", React.createElement("strong", {}, "Smart Agriculture"), ", and ", React.createElement("strong", {}, "Smart Assisted Living"), " — including special suits with integrated clothing that connects to mobile devices to monitor personal health."]),
      },
    ],
  },
  {
    n: "05",
    title: "IoT Product Ideation — Smart Home & Cybersecurity",
    subtitle: "Task Session — Day 6 Activity",
    tags: ["Project","Smart Home","Cybersecurity","IoT"],
    accent: "rust",
    blocks: [
      {
        label: "Task",
        body: React.createElement("p", {}, ["Design a ", React.createElement("strong", {}, "real-life product using IoT"), " — solve a genuine problem by connecting it with IoT technology."]),
      },
      {
        idea: {
          title: "Smart Home Integrating System with Cybersecurity",
          body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["A smart-city solution designed especially for ", React.createElement("strong", {}, "elderly grandparents"), " — integrating smart home automation with live traffic monitoring and a cybersecurity layer. All cameras, gadgets, and smart devices connect to the internet for seamless access."]), React.createElement("p", {"style":{"marginTop":"0.75rem"}}, [React.createElement("strong", {}, "Key features:"), " delivery personnel can access home/location easily. If a crime occurs, the cyber wing can instantly identify threats.", " ", React.createElement("strong", {}, "Emergency SOS"), " automatically sends alerts to appropriate bureaus. It's a plan for the future internet — a truly connected smart city."])]),
        },
      },
    ],
  },
  {
    n: "06",
    title: "History of Electronics & Components",
    subtitle: "Dr. Vineeth (Wireless Comm.) — 22/05/2026",
    tags: ["IC Evolution","Active/Passive","Components","Tools"],
    accent: "gold",
    blocks: [
      {
        label: "Evolution of Electronics",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Traced the journey from ", React.createElement("strong", {}, "vacuum tubes"), " to modern integrated circuits:"]), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Year"), React.createElement("th", {}, "Milestone"), React.createElement("th", {}, "Key Figure(s)")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "1904"), React.createElement("td", {}, "Electrode Tube / Vacuum Tube"), React.createElement("td", {}, "John Fleming")]), React.createElement("tr", {}, [React.createElement("td", {}, "1906"), React.createElement("td", {}, "Vacuum Triode (first transistor concept)"), React.createElement("td", {}, "Lee De Forest")]), React.createElement("tr", {}, [React.createElement("td", {}, "1947"), React.createElement("td", {}, "Transistor invented → era of semiconductors"), React.createElement("td", {}, "Bardeen, Brattain, Shockley (Bell Labs)")]), React.createElement("tr", {}, [React.createElement("td", {}, "1957"), React.createElement("td", {}, "Integrated Circuit (IC) demonstrated"), React.createElement("td", {}, "Jack Kilby")]), React.createElement("tr", {}, [React.createElement("td", {}, "—"), React.createElement("td", {}, "SSI → MSI → VLSI → ULSI (Moore's Law)"), React.createElement("td", {}, "Intel 4004 (4-bit microprocessor)")])])])]),
      },
      {
        label: "Active & Passive Devices",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Distinction"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Passive:"), " cannot amplify — Resistor (resists electron flow, Ω), Capacitor (stores electric field, blocks DC, passes AC — Farad), Inductor (stores magnetic field, blocks AC, passes DC — Henry).", React.createElement("br", {}, null), React.createElement("br", {}, null), React.createElement("strong", {}, "Active:"), " can amplify / process signals — Transistors, Diodes. Classified into tube devices and semiconductor devices."])]),
      },
      {
        label: "Lab Tools & Equipment",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Breadboard"), React.createElement("p", {}, "For simple circuit prototyping")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "PCB"), React.createElement("p", {}, "For complex circuits, components on both sides")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Multimeter"), React.createElement("p", {}, "Measure voltage, current, resistance")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Function Generator"), React.createElement("p", {}, "Generate test signals")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "DSO"), React.createElement("p", {}, "Digital Storage Oscilloscope — visualize signals")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Soldering Kit"), React.createElement("p", {}, "Iron, flux, lead, cutter, wires")])]),
      },
      {
        label: "Impact of Electronics",
        body: React.createElement("p", {}, ["Explored applications in ", React.createElement("strong", {}, "21st-century industry"), ", communication & entertainment, the medical field, and defence. ", React.createElement("strong", {}, "Digital electronics"), " is especially important for IoT — computers run on binary (1, 0)."]),
      },
    ],
  },
  {
    n: "07",
    title: "Digital Electronics — Logic Gates & Boolean Algebra",
    subtitle: "Dr. Vineeth — 22/05/2026 (continued)",
    tags: ["Boolean","Logic Gates","Number Systems","K-Map"],
    accent: "gold",
    blocks: [
      {
        label: "Analog vs Digital",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Difference"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Analog:"), " sinusoidal signals with infinite possible values — very difficult to process.", React.createElement("br", {}, null), React.createElement("strong", {}, "Digital:"), " only two discrete values (0 and 1). Easier to process, noise-immune, modular designs possible."])]),
      },
      {
        label: "Advantages of Digital Systems",
        body: React.createElement("p", {}, "Noise immunity · power of abstraction · modular designs · faster design completion · software- tools ease · programmability."),
      },
      {
        label: "Logic Gates — The Building Blocks",
        body: React.createElement(React.Fragment, {}, [React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Gate"), React.createElement("th", {}, "Circuit"), React.createElement("th", {}, "Rule")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "AND")), React.createElement("td", {}, "Switches in series"), React.createElement("td", {}, "Output 1 only if ALL inputs are 1")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "OR")), React.createElement("td", {}, "Switches in parallel"), React.createElement("td", {}, "Output 1 if ANY input is 1")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "NOT")), React.createElement("td", {}, "Inverter"), React.createElement("td", {}, "Output is the inverse of input")])])]), React.createElement("p", {"style":{"marginTop":"0.6rem","fontSize":"0.85rem"}}, ["Other gates: ", React.createElement("strong", {}, "NAND"), ", ", React.createElement("strong", {}, "NOR"), ", ", React.createElement("strong", {}, "XOR"), ",", " ", React.createElement("strong", {}, "XNOR"), ". Digital Trainer Kit uses ICs in", " ", React.createElement("strong", {}, "Dual In-Line Package (DIP)"), "."])]),
      },
      {
        label: "Number Systems",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Covered conversions between ", React.createElement("strong", {}, "Decimal"), ", ", React.createElement("strong", {}, "Binary"), ",", " ", React.createElement("strong", {}, "Hexadecimal"), ", and ", React.createElement("strong", {}, "Octal"), ". Also: ", React.createElement("strong", {}, "1's complement"), " ", "and ", React.createElement("strong", {}, "2's complement"), " for signed numbers."]), React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "Example: Hex 2A → Decimal"), React.createElement("div", {"className":"callout-text"}, ["2A → Binary: 0010 1010", React.createElement("br", {}, null), "Binary → Decimal: 0+0+32+0+8+0+2+0 = ", React.createElement("strong", {}, "42")])])]),
      },
      {
        label: "Boolean Algebra — Core Laws",
        body: React.createElement(React.Fragment, {}, [React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Law"), React.createElement("th", {}, "AND (·)"), React.createElement("th", {}, "OR (+)")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "Identity"), React.createElement("td", {}, "A · 1 = A"), React.createElement("td", {}, "A + 0 = A")]), React.createElement("tr", {}, [React.createElement("td", {}, "Null"), React.createElement("td", {}, "A · 0 = 0"), React.createElement("td", {}, "A + 1 = 1")]), React.createElement("tr", {}, [React.createElement("td", {}, "Idempotent"), React.createElement("td", {}, "A · A = A"), React.createElement("td", {}, "A + A = A")]), React.createElement("tr", {}, [React.createElement("td", {}, "Complement"), React.createElement("td", {}, "A · A' = 0"), React.createElement("td", {}, "A + A' = 1")])])]), React.createElement("div", {"className":"callout formula","style":{"marginTop":"0.9rem"}}, [React.createElement("div", {"className":"callout-label"}, "De Morgan's Theorems"), React.createElement("div", {"className":"callout-text"}, ["(A + B)' = A' · B'", React.createElement("br", {}, null), "(A · B)' = A' + B'"])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.6rem"}}, [React.createElement("div", {"className":"callout-label"}, "Other Laws"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Commutative:"), " A+B = B+A, A·B = B·A", React.createElement("br", {}, null), React.createElement("strong", {}, "Associative:"), " A+(B+C) = (A+B)+C", React.createElement("br", {}, null), React.createElement("strong", {}, "Distributive:"), " A·(B+C) = A·B + A·C", React.createElement("br", {}, null), React.createElement("strong", {}, "Absorption:"), " A+(A·B) = A"])])]),
      },
      {
        label: "Karnaugh Map (K-Map)",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["A graphical method to simplify Boolean expressions. Uses ", React.createElement("strong", {}, "Gray code ordering"), " ", "so adjacent cells differ by only one variable. Group adjacent 1s (for SOP) or 0s (for POS) to eliminate variables."]), React.createElement("div", {"className":"callout tip"}, [React.createElement("div", {"className":"callout-label"}, "K-Map Rules"), React.createElement("div", {"className":"callout-text"}, "Groups must be 1, 2, 4, or 8 cells · rectangular shapes only · largest possible groups · edge cells can wrap around · diagonal cells are NOT adjacent.")]), React.createElement("p", {"style":{"fontSize":"0.85rem","marginTop":"0.5rem"}}, [React.createElement("strong", {}, "Don't Care (X):"), " incomplete specified functions — treat as 0 or 1 to make larger groups, reducing gate count."])]),
      },
    ],
  },
  {
    n: "08",
    title: "Combinational Circuits — Adders, MUX, Decoders",
    subtitle: "Dr. Vineeth — Continued",
    tags: ["Half Adder","Full Adder","MUX/DEMUX","Encoder/Decoder"],
    accent: "gold",
    blocks: [
      {
        label: "Network Analysis & Synthesis",
        body: React.createElement("p", {}, [React.createElement("strong", {}, "Analysis:"), " given a circuit → find current, voltage, power (KCL, KVL, Mesh, Nodal, Superposition, Thevenin, Norton).", React.createElement("br", {}, null), React.createElement("strong", {}, "Synthesis:"), " given a desired function → design the circuit using AND, OR, NOT gates (Sum-of-Products form)."]),
      },
      {
        label: "Half Adder",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "Equations"), React.createElement("div", {"className":"callout-text"}, ["Sum:   S = A ⊕ B  (XOR)", React.createElement("br", {}, null), "Carry: C = A · B  (AND)"])]), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "A"), React.createElement("th", {}, "B"), React.createElement("th", {}, "Sum"), React.createElement("th", {}, "Carry")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "0"), React.createElement("td", {}, "0"), React.createElement("td", {}, "0"), React.createElement("td", {}, "0")]), React.createElement("tr", {}, [React.createElement("td", {}, "0"), React.createElement("td", {}, "1"), React.createElement("td", {}, "1"), React.createElement("td", {}, "0")]), React.createElement("tr", {}, [React.createElement("td", {}, "1"), React.createElement("td", {}, "0"), React.createElement("td", {}, "1"), React.createElement("td", {}, "0")]), React.createElement("tr", {}, [React.createElement("td", {}, "1"), React.createElement("td", {}, "1"), React.createElement("td", {}, "0"), React.createElement("td", {}, "1")])])])]),
      },
      {
        label: "Full Adder",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "Equations"), React.createElement("div", {"className":"callout-text"}, ["Sum:   S = A ⊕ B ⊕ Cᵢₙ", React.createElement("br", {}, null), "Carry: Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B)"])]), React.createElement("p", {"style":{"fontSize":"0.85rem","marginTop":"0.5rem"}}, ["Built using ", React.createElement("strong", {}, "two half adders + one OR gate"), ". Essential for multi-bit arithmetic."])]),
      },
      {
        label: "Half & Full Subtractor",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"callout formula"}, [React.createElement("div", {"className":"callout-label"}, "Half Subtractor"), React.createElement("div", {"className":"callout-text"}, ["Difference: D = A ⊕ B", React.createElement("br", {}, null), "Borrow:   Bₒᵤₜ = A' · B"])]), React.createElement("div", {"className":"callout formula","style":{"marginTop":"0.5rem"}}, [React.createElement("div", {"className":"callout-label"}, "Full Subtractor"), React.createElement("div", {"className":"callout-text"}, ["Difference: D = A ⊕ B ⊕ Bᵢₙ", React.createElement("br", {}, null), "Borrow:   Bₒᵤₜ = A'B + A'Bᵢₙ + BBᵢₙ"])])]),
      },
      {
        label: "Multiplexer (MUX) & Demultiplexer (DEMUX)",
        body: React.createElement(React.Fragment, {}, [React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "MUX — Data Selector"), React.createElement("p", {}, "Many inputs → one output. Uses selection lines. 4:1 MUX: Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "DEMUX — Data Distributor"), React.createElement("p", {}, "One input → many outputs. 1:4 DEMUX distributes input D to one of Y₀–Y₃ based on selection.")])]), React.createElement("table", {"className":"data-table","style":{"marginTop":"0.75rem"}}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Feature"), React.createElement("th", {}, "MUX"), React.createElement("th", {}, "DEMUX")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "Function"), React.createElement("td", {}, "Selects one input"), React.createElement("td", {}, "Selects one output")]), React.createElement("tr", {}, [React.createElement("td", {}, "Data Flow"), React.createElement("td", {}, "Many → One"), React.createElement("td", {}, "One → Many")]), React.createElement("tr", {}, [React.createElement("td", {}, "Use"), React.createElement("td", {}, "Data selection, TDM"), React.createElement("td", {}, "Data distribution, memory addressing")])])])]),
      },
      {
        label: "Encoders & Decoders",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Encoder (8:3)"), React.createElement("p", {}, "2ⁿ inputs → n outputs. Converts active input line to binary code. Priority encoder handles multiple active inputs.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Decoder (3:8)"), React.createElement("p", {}, "n inputs → 2ⁿ outputs. Activates exactly one output based on binary input. Used in memory addressing & 7-segment displays.")])]),
      },
    ],
  },
  {
    n: "09",
    title: "Sequential Logic — Flip-Flops & State Machines",
    subtitle: "Dr. Vineeth — Continued",
    tags: ["Flip-Flops","Counters","State Diagrams","Sequential"],
    accent: "gold",
    blocks: [
      {
        label: "Combinational vs Sequential",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Difference"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Combinational:"), " output depends only on present inputs.", React.createElement("br", {}, null), React.createElement("strong", {}, "Sequential:"), " output depends on present inputs + previous states (memory)."])]),
      },
      {
        label: "Types of Sequential Circuits",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Synchronous"), React.createElement("p", {}, "Uses clock signal. State changes at clock pulses. Easier to design. Examples: counters, registers, digital clocks.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Asynchronous"), React.createElement("p", {}, "No clock. State changes immediately on input change. Faster but complex. Examples: ripple counters.")])]),
      },
      {
        label: "Flip-Flops — Memory Elements",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Type"), React.createElement("th", {}, "Inputs"), React.createElement("th", {}, "Behaviour")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "SR")), React.createElement("td", {}, "S, R"), React.createElement("td", {}, "Set / Reset. S=R=1 is invalid.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "JK")), React.createElement("td", {}, "J, K"), React.createElement("td", {}, "Improved SR. J=K=1 → Toggle.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "D")), React.createElement("td", {}, "D"), React.createElement("td", {}, "Stores input directly. D=0 → Q=0, D=1 → Q=1.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "T")), React.createElement("td", {}, "T"), React.createElement("td", {}, "Toggle. T=0 → no change, T=1 → toggle.")])])]),
      },
      {
        label: "Design Steps for Sequential Circuits",
        body: React.createElement("ol", {"className":"numbered-steps"}, [React.createElement("li", {}, "Understand the problem — identify inputs, outputs, and states."), React.createElement("li", {}, ["Draw the ", React.createElement("strong", {}, "state diagram"), " (circles = states, arrows = transitions)."]), React.createElement("li", {}, ["Create the ", React.createElement("strong", {}, "state table"), " (present state → next state)."]), React.createElement("li", {}, ["Perform ", React.createElement("strong", {}, "state assignment"), " (binary codes to states)."]), React.createElement("li", {}, "Choose flip-flop type (D is simplest)."), React.createElement("li", {}, ["Derive flip-flop input equations using ", React.createElement("strong", {}, "K-Maps"), "."]), React.createElement("li", {}, ["Draw the final ", React.createElement("strong", {}, "logic circuit diagram"), "."])]),
      },
      {
        label: "State Assignment Methods",
        body: React.createElement("p", {"style":{"fontSize":"0.9rem"}}, [React.createElement("strong", {}, "Binary:"), " states in binary order · ", React.createElement("strong", {}, "Gray Code:"), " one bit change between adjacent states · ", React.createElement("strong", {}, "One-Hot:"), " each state uses one flip-flop."]),
      },
      {
        callout: {
          kind: "tip",
          label: "Design Tip",
          text: "State reduction minimizes hardware by combining equivalent states. This reduces flip-flop count and simplifies the overall design.",
        },
      },
      {
        label: "CircuitVerse Simulator",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Practice sequential circuits interactively using the ", React.createElement("strong", {}, "CircuitVerse"), " online simulator. Use the editor to build flip-flops, counters, and state machines and verify timing and behavior without hardware."]), React.createElement("div", {"style":{"marginTop":"0.6rem"}}, React.createElement("iframe", {"title":"CircuitVerse Simulator","src":"https://circuitverse.org/simulator","style":{"width":"100%","height":"480px","border":"1px solid #ddd"}}, null))]),
      },
      {
        exercises: ["Recreate an SR and D flip-flop in CircuitVerse and observe outputs for input sequences","Design a 3-state state machine, simulate transitions, and export the project link","Use CircuitVerse to measure propagation and setup/hold behaviour qualitatively"],
      },
    ],
  },
  {
    n: "10",
    title: "Microprocessors & Microcontrollers in IoT",
    subtitle: "Dr. Delly Thomas — Day 10",
    tags: ["Microprocessors","Microcontrollers","IoT","Embedded"],
    accent: "sage",
    blocks: [
      {
        label: "Session Focus",
        body: React.createElement("p", {}, "Introduced the difference between general-purpose microprocessors and embedded microcontrollers, and explained why microcontrollers are the preferred building blocks for IoT edge devices."),
      },
      {
        label: "Microprocessor vs Microcontroller",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Microprocessor"), React.createElement("p", {}, "CPU only. Requires external memory, I/O controllers, and support chips. Suited for desktop computers and systems that need high compute flexibility.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Microcontroller"), React.createElement("p", {}, "Single-chip embedded system with CPU, RAM, flash, and peripherals. Ideal for IoT sensors, actuators, and battery-powered devices.")])]),
      },
      {
        label: "Embedded IoT Architecture",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Studied the typical IoT node architecture: ", React.createElement("strong", {}, "sensors"), " → ", React.createElement("strong", {}, "MCU"), " →", React.createElement("strong", {}, "communication interface"), " → ", React.createElement("strong", {}, "cloud/actions"), ". The MCU bridges the physical world with data and automation."]), React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Interfaces"), React.createElement("div", {"className":"callout-text"}, "GPIO, ADC, PWM, UART, SPI, I2C, and wireless modules connect microcontrollers to sensors, displays, motors, and networks.")])]),
      },
      {
        label: "IoT Use Case",
        body: React.createElement("p", {}, "Designed an example temperature-monitoring IoT node: the microcontroller reads a sensor, processes data, and forwards results through a wireless interface for cloud logging and alerting."),
      },
      {
        label: "Programming & Power",
        body: React.createElement("p", {}, ["Reviewed firmware concepts such as ", React.createElement("strong", {}, "interrupts"), ", ", React.createElement("strong", {}, "timers"), ", and", React.createElement("strong", {}, "low-power modes"), " — essential for reliable, battery-friendly IoT systems."]),
      },
      {
        exercises: ["Compare a microprocessor-based system with a microcontroller-based IoT node","Draw an MCU block diagram showing sensors, communication, and power","List common embedded interfaces: GPIO, SPI, I2C, UART, ADC","Explain why microcontrollers are preferred for edge IoT applications"],
      },
    ],
  },
  {
    n: "11",
    title: "Keil, Proteus and SIM8085 Practicals",
    subtitle: "Dr. Delly Thomas (Continued)",
    tags: ["Keil","Proteus","SIM8085","Practicals","Tools"],
    accent: "rust",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Hands-on practical session focusing on three critical embedded development tools:", React.createElement("strong", {}, "Keil µVision"), ", ", React.createElement("strong", {}, "Proteus Design Suite"), ", and", " ", React.createElement("strong", {}, "SIM8085 simulator"), ". These tools are essential for microprocessor/microcontroller design, simulation, and verification."]),
      },
      {
        label: "Keil µVision IDE",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Industry-standard IDE for ", React.createElement("strong", {}, "ARM Cortex-M"), " microcontroller development. Provides complete environment for:"]), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Code Editor"), React.createElement("p", {}, "Write C/Assembly code with syntax highlighting, debugging symbols, and optimizations.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Compiler/Assembler"), React.createElement("p", {}, "Convert source code to machine code. Generates optimized object files for embedded targets.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Linker & Debugger"), React.createElement("p", {}, "Combine modules, manage memory layout. Debug via breakpoints, watch windows, and trace.")])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Project Structure in Keil"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Project"), " → ", React.createElement("strong", {}, "Target"), " → ", React.createElement("strong", {}, "Source Files"), " (C, Assembly) + ", React.createElement("strong", {}, "Header Files"), " + ", React.createElement("strong", {}, "Libraries"), ". Keil handles compilation, optimization flags, and device-specific configurations."])])]),
      },
      {
        label: "Proteus Design Suite",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Comprehensive EDA (Electronic Design Automation) platform for circuit design and mixed-signal simulation. Integrates virtual instruments and real-time processor simulation."), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Module"), React.createElement("th", {}, "Purpose")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "ARES")), React.createElement("td", {}, "PCB Layout design tool — place components, route traces, manage layers")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "ISIS/VSMDL")), React.createElement("td", {}, "Schematic capture and virtual simulation — test circuits before hardware")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "VSM")), React.createElement("td", {}, "Virtual System Modeling — simulate microcontrollers (8051, PIC, AVR, ARM)")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Virtual Instruments")), React.createElement("td", {}, "Oscilloscope, multimeter, logic analyzer, frequency generators")])])]), React.createElement("div", {"className":"callout tip","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Workflow in Proteus"), React.createElement("div", {"className":"callout-text"}, "Design schematic → Connect MCU + sensors/actuators → Load compiled firmware (HEX file from Keil) → Simulate behavior → Verify output with virtual instruments.")])]),
      },
      {
        label: "SIM8085 Simulator",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Dedicated simulator for the ", React.createElement("strong", {}, "Intel 8085 microprocessor"), " — an 8-bit processor widely used in educational labs. Perfect for learning microprocessor architecture and assembly programming fundamentals."]), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Register Set"), React.createElement("p", {}, "8-bit general-purpose registers: A, B, C, D, E, H, L. Special registers: SP (Stack Pointer), PC (Program Counter), Flags.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Addressing Modes"), React.createElement("p", {}, "Immediate, Register, Direct, Indirect, Register Indirect — each supported with dedicated instructions.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Memory Visualization"), React.createElement("p", {}, "Step through code, inspect memory, observe register changes in real-time during execution.")])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Example 8085 Assembly Program"), React.createElement("div", {"className":"callout-text"}, React.createElement("code", {"style":{"fontSize":"0.8rem","display":"block","whiteSpace":"pre-wrap"}}, "MVI A, 05H      ; Load 05 into Accumulator\nMVI B, 03H      ; Load 03 into B\nADD B           ; A = A + B (result: 08H)\nHLT             ; Halt execution"))])]),
      },
      {
        label: "Practical Workflow",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, [React.createElement("strong", {}, "Scenario:"), " Design a temperature sensor interfacing with an ARM microcontroller that displays readings on an LCD."]), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Step"), React.createElement("th", {}, "Tool"), React.createElement("th", {}, "Activity")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "1"), React.createElement("td", {}, React.createElement("strong", {}, "Keil")), React.createElement("td", {}, "Write firmware: ADC configuration, sensor reading, LCD display code")]), React.createElement("tr", {}, [React.createElement("td", {}, "2"), React.createElement("td", {}, React.createElement("strong", {}, "Keil")), React.createElement("td", {}, "Compile code → generate HEX file with memory layout optimization")]), React.createElement("tr", {}, [React.createElement("td", {}, "3"), React.createElement("td", {}, React.createElement("strong", {}, "Proteus")), React.createElement("td", {}, "Design circuit: MCU + temperature sensor (analog) + LCD module")]), React.createElement("tr", {}, [React.createElement("td", {}, "4"), React.createElement("td", {}, React.createElement("strong", {}, "Proteus")), React.createElement("td", {}, "Load HEX file into virtual MCU → simulate sensor readings → verify LCD output")]), React.createElement("tr", {}, [React.createElement("td", {}, "5"), React.createElement("td", {}, React.createElement("strong", {}, "All")), React.createElement("td", {}, "Debug: fix code, update HEX, re-simulate until behavior is correct")])])])]),
      },
      {
        exercises: ["Create a simple Keil project: write C code to blink an LED using GPIO","Compile the project and examine the generated HEX/ELF files and memory map","Design a Proteus circuit: MCU + push button + LED, load the HEX file, simulate button press","Write an 8085 assembly program in SIM8085: add two numbers, store result in memory","Step through the 8085 program, observe register and memory changes","Practice debugging techniques: breakpoints, watch windows, single-stepping"],
      },
      {
        scribble: "Hands-on session concluded with tool proficiency assessment",
      },
    ],
  },
  {
    n: "12",
    title: "Embedded Systems Fundamentals",
    subtitle: "Dr S Venkitesh",
    tags: ["Embedded Systems","Hardware","Firmware","Real-Time"],
    accent: "sage",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Comprehensive introduction to ", React.createElement("strong", {}, "embedded systems"), " — computing systems designed for specific tasks with hardware and software integration. Explored the distinction between general-purpose and embedded computing."]),
      },
      {
        label: "Embedded System Characteristics",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Single-Purpose Design"), React.createElement("p", {}, "Each embedded system performs a specific task or set of related tasks in a dedicated manner.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Resource Constraints"), React.createElement("p", {}, "Limited memory (RAM/Flash), processing power, and energy. Must optimize for efficiency.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Real-Time Operation"), React.createElement("p", {}, "Strict timing requirements — must respond to events within deadlines. Critical in safety systems.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Hardware-Software Co-design"), React.createElement("p", {}, "Firmware tightly coupled to hardware. Cannot be upgraded like general-purpose software.")])]),
      },
      {
        label: "Hardware Components",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Component"), React.createElement("th", {}, "Function")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Processor (MCU/SoC)")), React.createElement("td", {}, "Core computing element. Executes firmware, manages peripherals.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Memory")), React.createElement("td", {}, [React.createElement("strong", {}, "Flash:"), " non-volatile firmware storage. ", React.createElement("strong", {}, "RAM:"), " volatile runtime data."])]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Input Devices")), React.createElement("td", {}, "Sensors (temperature, pressure, motion), buttons, switches, ADC converters.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Output Devices")), React.createElement("td", {}, "Actuators (motors, relays), LEDs, LCD displays, DAC converters.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Communication Interface")), React.createElement("td", {}, "UART, SPI, I2C for local; Ethernet, WiFi, Cellular for remote connectivity.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Power Supply")), React.createElement("td", {}, "Battery, mains, or energy harvesting. Voltage regulation essential.")])])]),
      },
      {
        label: "Firmware Architecture",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Embedded software organized in layers:"), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Layer"), React.createElement("th", {}, "Responsibility")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Bootloader")), React.createElement("td", {}, "First code executed. Initializes hardware, loads application firmware into RAM.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Kernel/RTOS")), React.createElement("td", {}, "Task scheduling, interrupts, context switching. FreeRTOS, RTOS-32, Nucleus popular.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Device Drivers")), React.createElement("td", {}, "Manage hardware peripherals (UART, SPI, PWM, ADC). Provide abstraction APIs.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Application Code")), React.createElement("td", {}, "Main logic specific to the system. Uses kernel and driver APIs.")])])])]),
      },
      {
        label: "Real-Time Constraints",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Hard Real-Time"), React.createElement("p", {}, "Missing deadline causes system failure. Examples: medical devices, autonomous vehicles.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Soft Real-Time"), React.createElement("p", {}, "Deadline miss degrades performance but doesn't fail. Examples: multimedia streaming.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Firm Real-Time"), React.createElement("p", {}, "Few misses acceptable; persistent failures are problematic. Examples: video conferencing.")])]),
      },
      {
        exercises: ["List 10 examples of embedded systems in daily life and identify their single-purpose design","Draw a block diagram of a typical embedded system showing processor, memory, sensors, actuators","Research and compare popular microcontrollers: STM32, PIC32, AVR, nRF52","Explain why real-time operating systems (RTOS) are crucial for embedded systems","Analyze the firmware layers in a device you own (e.g., microwave, door lock)"],
      },
    ],
  },
  {
    n: "13",
    title: "Networking and Cloud Basics",
    subtitle: "Dr Koppala Guravaiah",
    tags: ["Networking","TCP/IP","Cloud","IoT Connectivity"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Introduction to ", React.createElement("strong", {}, "network fundamentals"), " and ", React.createElement("strong", {}, "cloud computing"), " — essential for IoT and modern embedded systems that require remote data transmission and processing."]),
      },
      {
        label: "Network Architecture",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "LAN (Local Area Network)"), React.createElement("p", {}, "Limited geographic scope. High speed (Ethernet), low latency. Used in offices, homes.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "WAN (Wide Area Network)"), React.createElement("p", {}, "Large geographic coverage. Connects LANs via ISP infrastructure. Examples: Internet, cellular networks.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "WLAN (Wireless LAN)"), React.createElement("p", {}, "WiFi standard (IEEE 802.11). Convenient but lower range and speed than wired Ethernet.")])]),
      },
      {
        label: "TCP/IP Protocol Stack",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, ["Standard model for internet communication — ", React.createElement("strong", {}, "four layers"), ":"]), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Layer"), React.createElement("th", {}, "Name"), React.createElement("th", {}, "Protocols"), React.createElement("th", {}, "Purpose")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, "4"), React.createElement("td", {}, React.createElement("strong", {}, "Application")), React.createElement("td", {}, "HTTP, HTTPS, MQTT, CoAP, DNS, SMTP, FTP"), React.createElement("td", {}, "User applications and services")]), React.createElement("tr", {}, [React.createElement("td", {}, "3"), React.createElement("td", {}, React.createElement("strong", {}, "Transport")), React.createElement("td", {}, "TCP (reliable), UDP (fast)"), React.createElement("td", {}, "End-to-end communication and flow control")]), React.createElement("tr", {}, [React.createElement("td", {}, "2"), React.createElement("td", {}, React.createElement("strong", {}, "Internet")), React.createElement("td", {}, "IP (IPv4, IPv6), ICMP"), React.createElement("td", {}, "Routing and logical addressing")]), React.createElement("tr", {}, [React.createElement("td", {}, "1"), React.createElement("td", {}, React.createElement("strong", {}, "Link")), React.createElement("td", {}, "Ethernet, WiFi, PPP, ARP"), React.createElement("td", {}, "Physical transmission and MAC addressing")])])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Key Concepts"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "IP Addressing:"), " 32-bit (IPv4) or 128-bit (IPv6) identifiers.", React.createElement("br", {}, null), React.createElement("strong", {}, "Ports:"), " 16-bit identifiers for services on a host (0-65535).", React.createElement("br", {}, null), React.createElement("strong", {}, "Sockets:"), " Endpoint of network communication (IP + Port)."])])]),
      },
      {
        label: "Cloud Computing Basics",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Cloud computing provides on-demand access to computing resources (compute, storage, networking) over the internet. Three service models:"), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "IaaS"), React.createElement("p", {}, [React.createElement("strong", {}, "Infrastructure as a Service."), " Virtual machines, storage, networking. User manages applications. Examples: AWS EC2, Azure VMs."])]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "PaaS"), React.createElement("p", {}, [React.createElement("strong", {}, "Platform as a Service."), " Development environment, databases, tools. User deploys code. Examples: Heroku, Google Cloud Platform."])]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "SaaS"), React.createElement("p", {}, [React.createElement("strong", {}, "Software as a Service."), " Fully managed applications accessible via browser. Examples: Salesforce, Office 365, Google Workspace."])])])]),
      },
      {
        label: "IoT Connectivity Protocols",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Protocol"), React.createElement("th", {}, "Range"), React.createElement("th", {}, "Power"), React.createElement("th", {}, "Use Case")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "WiFi")), React.createElement("td", {}, "~100m"), React.createElement("td", {}, "High"), React.createElement("td", {}, "Home/office networks, streaming devices")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Bluetooth/BLE")), React.createElement("td", {}, "~100m"), React.createElement("td", {}, "Low-Medium"), React.createElement("td", {}, "Wearables, personal area networks")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Cellular (4G/5G)")), React.createElement("td", {}, "km"), React.createElement("td", {}, "Medium-High"), React.createElement("td", {}, "Wide-area IoT, mobile devices")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "LoRaWAN")), React.createElement("td", {}, "km"), React.createElement("td", {}, "Very Low"), React.createElement("td", {}, "Long-range, low-power IoT networks")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "NB-IoT")), React.createElement("td", {}, "km"), React.createElement("td", {}, "Low"), React.createElement("td", {}, "Narrowband cellular for IoT")])])]),
      },
      {
        exercises: ["Explain the difference between TCP and UDP, and when to use each","Design a network architecture for a smart city with thousands of IoT sensors","Compare cloud providers (AWS, Azure, Google Cloud) based on IoT capabilities","Write pseudocode for an IoT device connecting to a cloud MQTT broker","Analyze the security implications of storing sensitive IoT data in the cloud"],
      },
    ],
  },
  {
    n: "14",
    title: "Cisco Packet Tracer - Network Simulation",
    subtitle: "Dr Koppala Guravaiah (Continued)",
    tags: ["Cisco Packet Tracer","Network Simulation","Routing","Switching"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Hands-on practical session using ", React.createElement("strong", {}, "Cisco Packet Tracer"), " — a network simulation tool for designing, building, and troubleshooting network topologies. Essential for learning practical networking concepts."]),
      },
      {
        label: "Cisco Packet Tracer Overview",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Tool Features"), React.createElement("div", {"className":"callout-text"}, [React.createElement("strong", {}, "Visual Design:"), " drag-and-drop network components.", React.createElement("br", {}, null), React.createElement("strong", {}, "Real-time Simulation:"), " observe packet flow in real-time.", React.createElement("br", {}, null), React.createElement("strong", {}, "Device Configuration:"), " configure routers, switches, devices with CLI and GUI.", React.createElement("br", {}, null), React.createElement("strong", {}, "Packet Tracer Mode:"), " trace individual packets through the network.", React.createElement("br", {}, null), React.createElement("strong", {}, "Multiple Subnets:"), " design complex multi-network topologies."])]),
      },
      {
        label: "Network Components",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Router"), React.createElement("p", {}, "Connects multiple networks. Routes packets between subnets using routing tables and IP addresses.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Switch"), React.createElement("p", {}, "Connects devices within a LAN. Forwards frames based on MAC addresses and VLAN settings.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "End Devices"), React.createElement("p", {}, "PCs, servers, printers, IP phones. Can be configured with static or DHCP-assigned IP addresses.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Links & Media"), React.createElement("p", {}, "Copper Straight-Through (same-device connection), Crossover, Fiber Optic (long distance).")])]),
      },
      {
        label: "Practical Network Topology",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, [React.createElement("strong", {}, "Scenario:"), " Design a network for a three-floor office building with separate departments:"]), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Layer"), React.createElement("th", {}, "Configuration")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Core Layer")), React.createElement("td", {}, "Central router (Internet connection, 192.168.1.0/24)")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Distribution Layer")), React.createElement("td", {}, "3 switches (one per floor). Each has its own subnet (192.168.2.0/24, 192.168.3.0/24, 192.168.4.0/24)")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Access Layer")), React.createElement("td", {}, "10-15 PCs per switch, configured with static IPs or DHCP")])])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Connectivity Test"), React.createElement("div", {"className":"callout-text"}, ["Use ", React.createElement("strong", {}, "Simulation Mode"), " to send PDU (Protocol Data Unit) packets between PCs on different floors. Observe routing decisions, MAC address resolution via ARP, and packet delivery."])])]),
      },
      {
        label: "Configuration Tasks",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Device Type"), React.createElement("th", {}, "Configuration Steps")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Router")), React.createElement("td", {}, ["• Assign IP addresses to each interface (e.g., Fa0/0: 192.168.1.1/24, Fa0/1: 192.168.2.1/24)", React.createElement("br", {}, null), "• Enable interfaces", React.createElement("br", {}, null), "• Configure routing protocol (Static or OSPF)"])]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Switch")), React.createElement("td", {}, ["• Assign VLAN IDs to ports", React.createElement("br", {}, null), "• Configure management IP (optional)", React.createElement("br", {}, null), "• Set up trunk links for inter-switch communication"])]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "PC/Server")), React.createElement("td", {}, ["• Assign static IP or enable DHCP", React.createElement("br", {}, null), "• Set default gateway (router IP)", React.createElement("br", {}, null), "• Configure DNS server"])])])]),
      },
      {
        label: "Key Networking Concepts Verified",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6"}}, [React.createElement("li", {}, [React.createElement("strong", {}, "Subnetting:"), " Dividing a network into smaller logical networks for better organization."]), React.createElement("li", {}, [React.createElement("strong", {}, "IP Routing:"), " Routers forward packets based on destination IP and routing table entries."]), React.createElement("li", {}, [React.createElement("strong", {}, "MAC Addressing:"), " Switches use MAC tables to forward frames within a LAN."]), React.createElement("li", {}, [React.createElement("strong", {}, "ARP (Address Resolution Protocol):"), " Maps IP addresses to MAC addresses."]), React.createElement("li", {}, [React.createElement("strong", {}, "DHCP (Dynamic Host Configuration Protocol):"), " Automatically assigns IP addresses to devices."]), React.createElement("li", {}, [React.createElement("strong", {}, "DNS (Domain Name System):"), " Translates domain names to IP addresses."])]),
      },
      {
        exercises: ["Design a small office network with 3 subnets and 15 devices total using Packet Tracer","Configure routers with static routing and verify connectivity between all subnets","Simulate a DHCP server and assign dynamic IPs to 10 client devices","Use Packet Tracer Simulation Mode to trace a packet from a PC on Floor 1 to a server on Floor 3","Troubleshoot a network failure: identify misconfigured IP, routing issue, or cable problem","Design a network with VLANs to separate different departments"],
      },
      {
        scribble: "Practical lab concluded with topology documentation and troubleshooting scenarios",
      },
    ],
  },
  {
    n: "15",
    title: "Advanced Cisco Packet Tracer - ACLs and Advanced Routing",
    subtitle: "Dr Koppala Guravaiah (Continued)",
    tags: ["ACL","Advanced Routing","OSPF","Security","Packet Tracer"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Advanced concepts in ", React.createElement("strong", {}, "Cisco Packet Tracer"), " focusing on network security, dynamic routing protocols, and access control. Topics covered include", " ", React.createElement("strong", {}, "Access Control Lists (ACLs)"), ", ", React.createElement("strong", {}, "Open Shortest Path First (OSPF)"), "routing protocol, and ", React.createElement("strong", {}, "VLAN implementation"), "."]),
      },
      {
        label: "Access Control Lists (ACLs)",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "ACLs are security filters that control traffic flowing in and out of network interfaces. Applied to router interfaces to permit or deny packets based on source/destination IP, protocol type, and port numbers."), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Standard ACL"), React.createElement("p", {}, "Filters based on source IP address only. Numbered (1-99) or named. Simple but limited.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Extended ACL"), React.createElement("p", {}, "Filters based on source/destination IP, protocol (TCP/UDP), and port numbers. More granular control. Numbered (100-199) or named.")])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "Example Standard ACL Configuration"), React.createElement("div", {"className":"callout-text"}, React.createElement("code", {"style":{"fontSize":"0.8rem","display":"block","whiteSpace":"pre-wrap"}}, "access-list 1 permit 192.168.1.0 0.0.0.255\naccess-list 1 deny any\ninterface FastEthernet0/1\n ip access-group 1 in"))])]),
      },
      {
        label: "Dynamic Routing Protocols",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Unlike static routing where administrators manually configure routes, dynamic routing protocols automatically discover network topology and adapt to changes. Routers exchange routing information via routing updates."), React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Protocol"), React.createElement("th", {}, "Type"), React.createElement("th", {}, "Metric"), React.createElement("th", {}, "Convergence")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "OSPF")), React.createElement("td", {}, "Link-State (IGP)"), React.createElement("td", {}, "Cost (bandwidth-based)"), React.createElement("td", {}, "Fast")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "RIP v2")), React.createElement("td", {}, "Distance-Vector (IGP)"), React.createElement("td", {}, "Hop Count (max 15)"), React.createElement("td", {}, "Slow")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "EIGRP")), React.createElement("td", {}, "Hybrid (IGP)"), React.createElement("td", {}, "Bandwidth, Delay, Reliability"), React.createElement("td", {}, "Very Fast")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "BGP")), React.createElement("td", {}, "Distance-Vector (EGP)"), React.createElement("td", {}, "AS Path"), React.createElement("td", {}, "Moderate")])])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "OSPF Configuration Example"), React.createElement("div", {"className":"callout-text"}, React.createElement("code", {"style":{"fontSize":"0.8rem","display":"block","whiteSpace":"pre-wrap"}}, "router ospf 1\n network 192.168.1.0 0.0.0.255 area 0\n network 192.168.2.0 0.0.0.255 area 0\n passive-interface FastEthernet0/1"))])]),
      },
      {
        label: "Virtual LANs (VLANs)",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "VLANs logically segment a physical network into multiple broadcast domains. Devices in different VLANs cannot communicate directly without a Layer 3 device (router). Improves security, reduces broadcast traffic, and simplifies network management."), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "VLAN Trunk"), React.createElement("p", {}, "Link carrying traffic for multiple VLANs. Uses 802.1Q tagging to identify VLAN membership in frames.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Access Port"), React.createElement("p", {}, "Port connected to end device (PC, printer). Belongs to a single VLAN, no tagging needed.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Inter-VLAN Routing"), React.createElement("p", {}, "Router with subinterfaces or separate physical interfaces routes traffic between VLANs.")])]), React.createElement("div", {"className":"callout","style":{"marginTop":"0.75rem"}}, [React.createElement("div", {"className":"callout-label"}, "VLAN Configuration on Switch"), React.createElement("div", {"className":"callout-text"}, React.createElement("code", {"style":{"fontSize":"0.8rem","display":"block","whiteSpace":"pre-wrap"}}, "vlan 10\n name Management\nvlan 20\n name Sales\ninterface FastEthernet0/1\n switchport mode access\n switchport access vlan 10"))])]),
      },
      {
        label: "Packet Tracer Labs",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, React.createElement("strong", {}, "Lab 1: ACL Implementation")), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6","marginBottom":"1rem"}}, [React.createElement("li", {}, "Create extended ACL on router to block HTTP traffic from a specific subnet"), React.createElement("li", {}, "Apply ACL to interface using Packet Tracer CLI"), React.createElement("li", {}, "Simulate PDU (ping, web request) and verify filtering behavior")]), React.createElement("p", {}, React.createElement("strong", {}, "Lab 2: Dynamic Routing with OSPF")), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6","marginBottom":"1rem"}}, [React.createElement("li", {}, "Design multi-area OSPF network (3 areas) with 6 routers"), React.createElement("li", {}, "Configure OSPF on all routers and verify neighbor relationships"), React.createElement("li", {}, "Test connectivity and trace OSPF path via Simulation Mode"), React.createElement("li", {}, "Simulate link failure and observe convergence time")]), React.createElement("p", {}, React.createElement("strong", {}, "Lab 3: VLAN and Inter-VLAN Routing")), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6"}}, [React.createElement("li", {}, "Create 4 VLANs on switches and assign ports accordingly"), React.createElement("li", {}, "Configure router with subinterfaces for inter-VLAN routing"), React.createElement("li", {}, "Assign DHCP servers to each VLAN"), React.createElement("li", {}, "Verify clients in different VLANs can communicate through router")])]),
      },
      {
        label: "Advanced Concepts Covered",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Concept"), React.createElement("th", {}, "Description")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "NAT (Network Address Translation)")), React.createElement("td", {}, "Translates private IPs to public IPs for internet communication. Protects internal network structure.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Port Forwarding")), React.createElement("td", {}, "Directs external traffic on specific ports to internal servers behind NAT.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "DHCP Snooping")), React.createElement("td", {}, "Switch-based security to prevent rogue DHCP servers on the network.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Spanning Tree Protocol (STP)")), React.createElement("td", {}, "Prevents loops in switched networks by selectively disabling redundant links.")])])]),
      },
      {
        exercises: ["Design and implement a standard ACL to restrict access from one subnet to another","Configure extended ACL to allow only HTTPS traffic from HR department to server subnet","Set up OSPF dynamic routing for a multi-building campus network","Implement VLANs for different departments (IT, HR, Sales) and configure inter-VLAN routing","Test failover scenarios: remove a link and observe OSPF reconvergence","Configure NAT on a router and verify internal users can access external services","Design a network security policy using ACLs and VLANs"],
      },
      {
        scribble: "Session completed with comprehensive network design and security exercises",
      },
    ],
  },
  {
    n: "16",
    title: "Cloud Computing - Architecture and Services",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Cloud Computing","AWS","Azure","GCP","Deployment Models"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Comprehensive exploration of ", React.createElement("strong", {}, "cloud computing"), " — on-demand access to computing resources over the internet. Covers deployment models, service models, major cloud providers, and real-world IoT/data applications."]),
      },
      {
        label: "Cloud Deployment Models",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Public Cloud"), React.createElement("p", {}, "Resources owned by cloud provider, shared among multiple tenants. Economical, scalable, but lower security control. Examples: AWS, Azure, GCP.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Private Cloud"), React.createElement("p", {}, "Infrastructure hosted on-premises or dedicated provider. High security and control, but higher cost. Suitable for enterprises with sensitive data.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Hybrid Cloud"), React.createElement("p", {}, "Combines public and private clouds. Sensitive workloads on private, scalable workloads on public. Provides flexibility and optimization.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Community Cloud"), React.createElement("p", {}, "Shared infrastructure for organizations with common goals or compliance requirements. Collaborative and cost-effective.")])]),
      },
      {
        label: "Cloud Service Models (Recap)",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Model"), React.createElement("th", {}, "What Provider Manages"), React.createElement("th", {}, "What User Manages"), React.createElement("th", {}, "Examples")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "IaaS")), React.createElement("td", {}, "Hardware, virtualization, storage, networking"), React.createElement("td", {}, "OS, middleware, application, data"), React.createElement("td", {}, "AWS EC2, Azure VMs, DigitalOcean")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "PaaS")), React.createElement("td", {}, "Infrastructure, OS, middleware, development tools"), React.createElement("td", {}, "Application code, data"), React.createElement("td", {}, "Heroku, Google App Engine, AWS Elastic Beanstalk")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "SaaS")), React.createElement("td", {}, "Everything — full application stack"), React.createElement("td", {}, "Configuration, data input"), React.createElement("td", {}, "Salesforce, Office 365, Slack, Zoom")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "FaaS")), React.createElement("td", {}, "Infrastructure, server management, scaling"), React.createElement("td", {}, "Application logic (functions)"), React.createElement("td", {}, "AWS Lambda, Azure Functions, Google Cloud Functions")])])]),
      },
      {
        label: "Major Cloud Providers Comparison",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Provider"), React.createElement("th", {}, "Compute"), React.createElement("th", {}, "Storage"), React.createElement("th", {}, "Database"), React.createElement("th", {}, "Strength")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "AWS")), React.createElement("td", {}, "EC2"), React.createElement("td", {}, "S3"), React.createElement("td", {}, "RDS, DynamoDB"), React.createElement("td", {}, "Market leader, comprehensive services, IoT support")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Azure")), React.createElement("td", {}, "Virtual Machines"), React.createElement("td", {}, "Blob Storage"), React.createElement("td", {}, "SQL Database, Cosmos DB"), React.createElement("td", {}, "Enterprise integration, Hybrid cloud, Office 365")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "GCP")), React.createElement("td", {}, "Compute Engine"), React.createElement("td", {}, "Cloud Storage"), React.createElement("td", {}, "Cloud SQL, Firestore"), React.createElement("td", {}, "Data analytics, AI/ML, BigQuery")])])]),
      },
      {
        label: "Cloud Architecture Patterns",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Common architectural patterns for cloud applications:"), React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Multi-Tier Architecture"), React.createElement("p", {}, "Presentation layer, business logic layer, data layer — each on separate servers. Scalable and maintainable.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Microservices"), React.createElement("p", {}, "Break application into small, independent services. Each service handles one business capability. Deployed and scaled independently.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Serverless"), React.createElement("p", {}, "No server management. Write functions, cloud provider handles scaling. Pay only for execution time. Ideal for event-driven workloads.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Containerization"), React.createElement("p", {}, "Package application with dependencies in Docker containers. Run consistently across environments. Orchestrated by Kubernetes for production.")])])]),
      },
      {
        label: "Cloud Storage Solutions",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Storage Type"), React.createElement("th", {}, "Use Case"), React.createElement("th", {}, "Example (AWS)")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Object Storage")), React.createElement("td", {}, "Files, media, backups. Accessed via HTTP/API. Scalable and durable."), React.createElement("td", {}, "S3")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Block Storage")), React.createElement("td", {}, "Virtual disks for EC2 instances. Low latency for databases and applications."), React.createElement("td", {}, "EBS")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "File Storage")), React.createElement("td", {}, "Network file systems for NFS/SMB access. Shared by multiple instances."), React.createElement("td", {}, "EFS")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Data Warehouse")), React.createElement("td", {}, "Large-scale analytics. Querying terabytes of data efficiently."), React.createElement("td", {}, "Redshift")])])]),
      },
      {
        label: "IoT and Cloud Integration",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Cloud platforms provide critical services for IoT applications:"), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, [React.createElement("strong", {}, "Message Brokers:"), " MQTT, AMQP for IoT device communication (AWS IoT Core, Azure IoT Hub)"]), React.createElement("li", {}, [React.createElement("strong", {}, "Data Storage:"), " Time-series databases for sensor data (InfluxDB, Prometheus)"]), React.createElement("li", {}, [React.createElement("strong", {}, "Stream Processing:"), " Real-time data pipelines (Apache Kafka, AWS Kinesis)"]), React.createElement("li", {}, [React.createElement("strong", {}, "ML/Analytics:"), " Train models on collected data, predict patterns (AWS SageMaker, Google Vertex AI)"]), React.createElement("li", {}, [React.createElement("strong", {}, "Edge Computing:"), " Deploy inference at edge to reduce latency (AWS IoT Greengrass, Azure IoT Edge)"])])]),
      },
      {
        label: "Cloud Security Best Practices",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Practice"), React.createElement("th", {}, "Description")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Identity & Access Management (IAM)")), React.createElement("td", {}, "Principle of least privilege. Role-based access control (RBAC). MFA enabled.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Encryption")), React.createElement("td", {}, "Data at rest (storage), in transit (TLS/SSL). Key management in HSM.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Network Security")), React.createElement("td", {}, "VPCs, security groups, NACLs, WAF to filter malicious traffic.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Monitoring & Logging")), React.createElement("td", {}, "CloudTrail (AWS) logs all API calls. CloudWatch monitors metrics and alerts on anomalies.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Compliance")), React.createElement("td", {}, "SOC 2, HIPAA, GDPR certifications. Regular audits and penetration testing.")])])]),
      },
      {
        label: "Practical Use Cases",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, React.createElement("strong", {}, "IoT Weather Monitoring Station")), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6","marginBottom":"1rem"}}, [React.createElement("li", {}, "Sensors (temperature, humidity, pressure) → microcontroller"), React.createElement("li", {}, "Data sent to cloud via WiFi/cellular"), React.createElement("li", {}, "Cloud stores in time-series database (DynamoDB, InfluxDB)"), React.createElement("li", {}, "Web dashboard queries and visualizes trends"), React.createElement("li", {}, "ML model predicts weather patterns from historical data")]), React.createElement("p", {}, React.createElement("strong", {}, "Smart City Traffic Management")), React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.6"}}, [React.createElement("li", {}, "Traffic sensors at intersections → edge devices"), React.createElement("li", {}, "Real-time traffic data streamed to cloud (Apache Kafka)"), React.createElement("li", {}, "ML analyzes patterns, predicts congestion"), React.createElement("li", {}, "Mobile app alerts users of delays, suggests alternate routes"), React.createElement("li", {}, "City dashboard aggregates data for urban planning")])]),
      },
      {
        exercises: ["Compare pricing models of AWS, Azure, GCP for a typical web application","Design cloud architecture for an IoT home automation system with redundancy","Set up a simple microservices application on a cloud platform using containers","Configure IAM policies to implement least-privilege access for different teams","Analyze cloud security implications: shared responsibility model, data residency, compliance","Estimate costs for a data streaming application processing 1 million events per day","Design a disaster recovery and backup strategy for a mission-critical cloud application"],
      },
      {
        scribble: "Session concluded with architecture design exercises and cloud platform hands-on labs",
      },
    ],
  },
  {
    n: "17",
    title: "Introduction to AWS and Docker",
    subtitle: "Dr Shajulin Benedict",
    tags: ["AWS","Docker","Cloud","Containers"],
    accent: "rust",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Introduced the fundamentals of ", React.createElement("strong", {}, "AWS cloud services"), " and ", React.createElement("strong", {}, "Docker"), "container technology. Covered how cloud infrastructure and containerization accelerate modern application deployment."]),
      },
      {
        label: "AWS Fundamentals",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Compute"), React.createElement("p", {}, "EC2 instances, server provisioning, virtual machines in the cloud.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Storage"), React.createElement("p", {}, "S3 object storage, EBS block storage, and backup strategies.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Networking"), React.createElement("p", {}, "VPCs, subnets, security groups, and public/private network design.")])]),
      },
      {
        label: "Docker Basics",
        body: React.createElement(React.Fragment, {}, [React.createElement("p", {}, "Covered Docker images, containers, Dockerfile syntax, and how containers provide consistent runtime environments across machines."), React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Benefits"), React.createElement("div", {"className":"callout-text"}, "Faster deployment, environment isolation, reproducible builds, and simplified scaling.")])]),
      },
      {
        exercises: ["Create a simple Dockerfile for a Node.js or Python app","Build and run a Docker container locally","List AWS services discussed and explain their use cases","Design a deployment workflow using AWS and Docker together"],
      },
    ],
  },
  {
    n: "18",
    title: "Cisco Packet Tracer Assignment",
    subtitle: "Dr Koppala Guravaiah",
    tags: ["Assignment","Packet Tracer","Routing","Switching"],
    accent: "gold",
    blocks: [
      {
        label: "Assignment Goals",
        body: React.createElement("p", {}, ["Completed a practical assignment in ", React.createElement("strong", {}, "Cisco Packet Tracer"), " involving network design, device configuration, and troubleshooting. Focused on implementing real-world network requirements."]),
      },
      {
        label: "Design Requirements",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Build a multi-subnet office network"), React.createElement("li", {}, "Configure routers and switches with static and dynamic routes"), React.createElement("li", {}, "Implement VLANs for department separation"), React.createElement("li", {}, "Verify connectivity using Simulation Mode")]),
      },
      {
        label: "Verification and Troubleshooting",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Checklist"), React.createElement("div", {"className":"callout-text"}, "Confirmed IP addressing, gateway settings, routing tables, and packet flow. Resolved issues with misconfigured interfaces and ACL mismatches.")]),
      },
    ],
  },
  {
    n: "19",
    title: "Arduino Programming",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Arduino","Programming","Microcontrollers","Sensors"],
    accent: "sage",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Introduced ", React.createElement("strong", {}, "Arduino programming"), " and the Arduino IDE. Covered basic sketch structure and how to control digital and analog I/O using code."]),
      },
      {
        label: "Sketch Structure",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "setup()"), React.createElement("p", {}, "Initialize pins, serial communication, and hardware configurations once at startup.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "loop()"), React.createElement("p", {}, "Repeatedly executed code that controls runtime behavior and responds to inputs.")])]),
      },
      {
        label: "IO Control",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "DigitalWrite and digitalRead for digital pins"), React.createElement("li", {}, "analogRead for sensor values"), React.createElement("li", {}, "analogWrite for PWM motor/LED control"), React.createElement("li", {}, "Serial.println for debugging and monitoring")]),
      },
    ],
  },
  {
    n: "20",
    title: "Tinkercad Circuits",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Tinkercad","Circuits","Simulation","Electronics"],
    accent: "rust",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Hands-on session using ", React.createElement("strong", {}, "Tinkercad Circuits"), " to build and simulate electronic circuits on a virtual breadboard."]),
      },
      {
        label: "Basic Circuit Elements",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Resistors and LEDs"), React.createElement("p", {}, "Used resistors to limit current and light LEDs safely in Tinkercad simulations.")]), React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Breadboard Wiring"), React.createElement("p", {}, "Practiced placing components and wiring rails correctly to avoid short circuits.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Power Supply"), React.createElement("p", {}, "Configured 5V and GND rails for Arduino and circuit components.")])]),
      },
      {
        label: "Simulation Workflow",
        body: React.createElement("p", {}, "Designed circuits, connected components, ran simulations, and observed real-time behavior. Used virtual multimeter and oscilloscope tools to validate signals."),
      },
    ],
  },
  {
    n: "21",
    title: "Cisco Packet Tracer Assignment, AOD, DSD, OSPF, MQTT, RIP",
    subtitle: "Dr Koppala Guravaiah",
    tags: ["Packet Tracer","OSPF","RIP","MQTT","AOD","DSD"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Advanced networking topics with an assignment covering ", React.createElement("strong", {}, "Cisco Packet Tracer"), ", routing protocols, and IoT messaging with ", React.createElement("strong", {}, "MQTT"), "."]),
      },
      {
        label: "Routing Protocols",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Protocol"), React.createElement("th", {}, "Use"), React.createElement("th", {}, "Key Feature")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "OSPF")), React.createElement("td", {}, "Link-state routing within an autonomous system"), React.createElement("td", {}, "Fast convergence, cost-based paths")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "RIP")), React.createElement("td", {}, "Distance-vector routing for small networks"), React.createElement("td", {}, "Simple, hop-count limited to 15")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "AOD")), React.createElement("td", {}, "Ad hoc on-demand routing for wireless mesh networks"), React.createElement("td", {}, "Route discovery on demand")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "DSD")), React.createElement("td", {}, "Dynamic source routing for mobile ad hoc networks"), React.createElement("td", {}, "Source routing via route caches")])])]),
      },
      {
        label: "MQTT and IoT Messaging",
        body: React.createElement("p", {}, ["Covere d the publish/subscribe model of ", React.createElement("strong", {}, "MQTT"), ", connecting IoT devices to a broker for telemetry and command messaging."]),
      },
      {
        label: "Assignment Tasks",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Configure routers and switches for OSPF and RIP"), React.createElement("li", {}, "Integrate MQTT-capable devices with a cloud broker"), React.createElement("li", {}, "Document network topology and describe protocol behaviour"), React.createElement("li", {}, "Verify end-to-end connectivity and message flow in Packet Tracer")]),
      },
    ],
  },
  {
    n: "22",
    title: "Sensors Circuits Using Tinkercad",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Sensors","Tinkercad","IoT","Simulation"],
    accent: "sage",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Built and simulated sensor circuits in ", React.createElement("strong", {}, "Tinkercad"), ", focusing on temperature, light, and motion sensing using virtual components."]),
      },
      {
        label: "Sensor Examples",
        body: React.createElement("div", {"className":"concept-grid"}, [React.createElement("div", {"className":"concept-card c-gold"}, [React.createElement("h5", {}, "Temperature Sensor"), React.createElement("p", {}, "Used an analog temperature sensor to read changing voltage values.")]), React.createElement("div", {"className":"concept-card c-rust"}, [React.createElement("h5", {}, "Photoresistor"), React.createElement("p", {}, "Light sensor that changes resistance with illumination and allows light-based control.")]), React.createElement("div", {"className":"concept-card c-sage"}, [React.createElement("h5", {}, "Motion Sensor"), React.createElement("p", {}, "Detected movement and generated digital signals for the microcontroller.")])]),
      },
      {
        label: "Simulation Workflow",
        body: React.createElement("p", {}, "Connected sensors to Arduino and observed live readings. Used serial monitor and virtual instruments to confirm correct readings."),
      },
      {
        label: "GitHub Link",
        body: React.createElement("a", {
          href: "https://github.com/reemaac/tinkercad/tree/main/SENSOR",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-neonCyan hover:underline inline-flex items-center gap-1 font-mono text-xs"
        }, [
          "reemaac/tinkercad/SENSOR",
          React.createElement("span", {}, " ↗")
        ])
      },
    ],
  },
  {
    n: "23",
    title: "Actuators Circuits Using Tinkercad",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Actuators","Tinkercad","Motors","Relays"],
    accent: "rust",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Designed circuits in ", React.createElement("strong", {}, "Tinkercad"), " that control actuators such as motors, relays, and buzzers from a microcontroller."]),
      },
      {
        label: "Actuator Types",
        body: React.createElement("table", {"className":"data-table"}, [React.createElement("thead", {}, React.createElement("tr", {}, [React.createElement("th", {}, "Actuator"), React.createElement("th", {}, "Function")])), React.createElement("tbody", {}, [React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "DC Motor")), React.createElement("td", {}, "Rotational actuator for motion and mechanical force.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Relay")), React.createElement("td", {}, "Electromechanical switch used to control high-power loads.")]), React.createElement("tr", {}, [React.createElement("td", {}, React.createElement("strong", {}, "Buzzer")), React.createElement("td", {}, "Sound output device for alarms and notifications.")])])]),
      },
      {
        label: "Control Techniques",
        body: React.createElement("p", {}, "Used PWM, digital switching, and driver circuits to safely control actuators from Arduino outputs."),
      },
      {
        label: "GitHub Link",
        body: React.createElement("a", {
          href: "https://github.com/reemaac/tinkercad/tree/main/ACTUALATOR",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-neonPurple hover:underline inline-flex items-center gap-1 font-mono text-xs"
        }, [
          "reemaac/tinkercad/ACTUALATOR",
          React.createElement("span", {}, " ↗")
        ])
      },
    ],
  },
  {
    n: "24",
    title: "Sensors and Actuators Combined Circuits Using Tinkercad",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Sensors","Actuators","Tinkercad","Embedded"],
    accent: "gold",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Integrated sensor inputs and actuator outputs in virtual circuits to build complete embedded control systems using ", React.createElement("strong", {}, "Tinkercad"), "."]),
      },
      {
        label: "Example Projects",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Temperature sensor controlling a fan motor"), React.createElement("li", {}, "Light sensor turning LEDs on/off automatically"), React.createElement("li", {}, "Motion detector activating a buzzer or relay")]),
      },
      {
        label: "Design Considerations",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Important Notes"), React.createElement("div", {"className":"callout-text"}, "Ensure correct power levels, use transistors or relays for high-current loads, and validate the logic flow from sensor readings to actuator commands.")]),
      },
      {
        label: "GitHub Link",
        body: React.createElement("a", {
          href: "https://github.com/reemaac/tinkercad/tree/main/COMBINATION",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-neonBlue hover:underline inline-flex items-center gap-1 font-mono text-xs"
        }, [
          "reemaac/tinkercad/COMBINATION",
          React.createElement("span", {}, " ↗")
        ])
      },
    ],
  },
  {
    n: "25",
    title: "Exam on Tinkercad Circuit",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Exam","Tinkercad","Arduino","Simulation"],
    accent: "sage",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Exam on ", React.createElement("strong", {}, "Tinkercad circuit"), ". Prepare one Tinkercad circuit with Arduino code and simulate it successfully."]),
      },
      {
        label: "Exam Requirements",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Prepare one complete Tinkercad circuit using an Arduino board"), React.createElement("li", {}, "Use Arduino code to control the circuit and validate it in simulation"), React.createElement("li", {}, "Include at least one sensor or input and one actuator or output element"), React.createElement("li", {}, "Run the simulation and verify the circuit behavior using Tinkercad tools")]),
      },
      {
        label: "Key Focus Areas",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "What was evaluated"), React.createElement("div", {"className":"callout-text"}, "Circuit design, Arduino coding, sensor-actuator integration, simulation accuracy, and the ability to explain the workflow.")]),
      },
      {
        label: "Preparation Tips",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Tips Before the Exam"), React.createElement("div", {"className":"callout-text"}, "Practice building Tinkercad circuits, test Arduino sketches in simulation, and verify all component connections before presenting the final design.")]),
      },
    ],
  },
  {
    n: "26",
    title: "Tinkercad Circuits Review",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Tinkercad","Review","Circuits","Final Practical"],
    accent: "rust",
    blocks: [
      {
        label: "Session Overview",
        body: React.createElement("p", {}, ["Final practical review session in ", React.createElement("strong", {}, "Tinkercad"), " to reinforce circuit design, simulation, and debugging skills."]),
      },
      {
        label: "Hands-on Practice",
        body: React.createElement("p", {}, "Built sample circuits again, verified sensor-actuator interactions, and confirmed component behavior under different conditions."),
      },
      {
        label: "Key Takeaways",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Summary"), React.createElement("div", {"className":"callout-text"}, "Reviewed wiring best practices, simulation troubleshooting, and how virtual prototyping helps design reliable embedded systems.")]),
      },
      {
        label: "GitHub Link",
        body: React.createElement("a", {
          href: "https://github.com/reemaac/tinkercad/tree/main",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-neonPurple hover:underline inline-flex items-center gap-1 font-mono text-xs"
        }, [
          "reemaac/tinkercad",
          React.createElement("span", {}, " ↗")
        ])
      },
    ],
  },
  {
    n: "27",
    title: "Mini Project Kickoff — Plant Monitor",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Mini Project","IoT","Arduino","Sensors"],
    accent: "gold",
    blocks: [
      {
        label: "Project Scope",
        body: React.createElement("p", {}, ["Defined the mini project as an ", React.createElement("strong", {}, "IoT plant-monitoring system"), " that tracks soil moisture, light level, and basic health status. The goal was to design a complete prototype using Arduino or an ESP board with a clear build plan."]),
      },
      {
        label: "Component Selection",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Soil moisture sensor for soil hydration monitoring"), React.createElement("li", {}, "Light sensor (LDR) to measure ambient brightness"), React.createElement("li", {}, "Arduino/ESP microcontroller for data acquisition"), React.createElement("li", {}, "Buzzer or LED alert for threshold warnings")]),
      },
      {
        label: "Design Workflow",
        body: React.createElement("p", {}, ["Planned the prototype in ", React.createElement("strong", {}, "Tinkercad"), ", mapped the wiring, and wrote the project structure before implementation: sensor read, threshold detection, alert logic, and optional serial/cloud output."]),
      },
      {
        label: "Next Steps",
        body: React.createElement("div", {"className":"callout tip"}, [React.createElement("div", {"className":"callout-label"}, "Project Planning"), React.createElement("div", {"className":"callout-text"}, "Keep the first build simple: read sensors, display results on serial monitor, and trigger one alert. Add cloud logging or dashboard later once the core circuit is working.")]),
      },
      {
        exercises: ["Sketch the mini project circuit on paper and label every wire","Choose appropriate sensor thresholds for moisture and light","Write a basic Arduino sketch that reads sensors and prints values to serial","Plan a short demo narrative: what the prototype should show and why it matters"],
      },
    ],
  },
  {
    n: "28",
    title: "Mini Project Build & Demo",
    subtitle: "Dr Shajulin Benedict",
    tags: ["Mini Project","Build","Testing","Review"],
    accent: "sage",
    blocks: [
      {
        label: "Build Summary",
        body: React.createElement("p", {}, ["Implemented the mini project prototype in ", React.createElement("strong", {}, "Tinkercad"), " and reviewed the integration of sensors, microcontroller, and alert components. Verified that readings were consistent and the system could indicate plant health reliably."]),
      },
      {
        label: "Testing & Debugging",
        body: React.createElement("div", {"className":"callout"}, [React.createElement("div", {"className":"callout-label"}, "Key Testing"), React.createElement("div", {"className":"callout-text"}, "Validated sensor output ranges, adjusted resistor values, fixed wiring mistakes, and confirmed that the alert triggers at the intended thresholds.")]),
      },
      {
        label: "Project Demo",
        body: React.createElement("p", {}, "Prepared a short demonstration of the prototype in lab: sensor values flow to the serial monitor, the alert LED/buzzer activates when moisture is low, and the system can be extended with cloud logging."),
      },
      {
        label: "Lessons Learned",
        body: React.createElement("ul", {"style":{"marginLeft":"1.5rem","lineHeight":"1.8"}}, [React.createElement("li", {}, "Prototyping in Tinkercad saves time and makes debugging easier."), React.createElement("li", {}, "Clear wiring and power planning reduce issues in embedded builds."), React.createElement("li", {}, "Start with one sensor path, then expand to additional features.")]),
      },
      {
        exercises: ["Document the final circuit and code flow for the mini project","List 3 possible enhancements for the next version (cloud, mobile alert, data logging)","Prepare a short demo script explaining the problem, solution, and results","Reflect on what worked and what still needs refinement for a real prototype"],
      },
    ],
  },
];
