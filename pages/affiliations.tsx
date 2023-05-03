import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Props as GraphProps } from '../lib/NoSSRGraph';
// typescript-compliant dynamic import
// see:
// https://github.com/vercel/next.js/issues/4515
// https://nextjs.org/docs/advanced-features/dynamic-import
const NoSSRGraph: ComponentType = dynamic((() => import('../lib/NoSSRGraph') as any), {
  loading: () => <p>Looking for dudes...</p>,
  ssr: false // react-graph can't be rendered server side
});
const Graph = NoSSRGraph as ComponentType<GraphProps>;

const ROTATOR = 0;
const WORDCEL = 1;
const HYBRID = 2;
const COGTYPE = [
  {
    text: "Shape Rotator",
    color: "#ff5200"
  },
  {
    text: "Wordcel",
    color: "#87cefa"
  },
  {
    text: "Hybrid",
    color: "#dda2dd"
  }
];

const aff: Array<{name: string, href: string|null, type: number, desc: string}> = [
  {name: "peterz", href: null, type: HYBRID, desc: "Cryptography, Machine Learning & Research Engineering"},
  {name: "keel", href: "https://posts.tjkeel.com", type: WORDCEL, desc: "Trust & Compliance"},
  {name: "yao", href: "https://lihan-yao.medium.com", type: HYBRID, desc: "Information Theory & Blockchain Analysis"},
  {name: "barron", href: "https://tbarron.xyz", type: ROTATOR, desc: "Category Theory & Software Engineering"},
  /*{name: "steve", href: null, desc: "Event Planning & Media Coordination"}*/
]

export function Content() {
  const graph = {
    nodes: aff.map(({name, href, desc, type}, index) => {
      const cog = COGTYPE[type];
      var website = "";
      if (href !== null) {
        website = "\n[ click to visit " + href.split("//")[1] + " ]";
      }
      return {
        id: index + 1,
        label: name,
        title: name.toUpperCase() + " ( " + COGTYPE[type].text + " )\n" + desc + website,
        href: href,
        color: COGTYPE[type].color
      }
    }),
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
      { from: 2, to: 5 }
    ]
  };

  const options = {
    layout: {
      hierarchical: false
    },
    interaction: {
      hover: true,
      dragNodes: false,
      dragView: false,
      tooltipDelay: 10,
      zoomView: false,
    },
    manipulation: {
      enabled: false
    },
    edges: {
      color: "#555555"
    },
    nodes: {
      shape: "circle"
    },
    height: "441px"
  };

  const events = {
    click: (event: any) => {
      var { nodes, edges } = event;
      var node = graph.nodes.filter(node => node.id == nodes[0])[0];
      if (node !== undefined && node.href !== null) {
        window.location.href = node.href;
      }
    }
  };

  return <div className="affiliations">
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network: any) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  </div>
}

export default function Affiliations() {
  return (
    <main>
      <div
        className={`flex min-h-screen flex-row items-center justify-between p-24`}
      >
        <Content/>
      </div>
    </main>
  );
}
