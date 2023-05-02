import Graph_ from "react-graph-vis";

export interface Props {
  graph: any
  options: any
  events: any
  getNetwork: any
}

export class Graph extends Graph_ {
  constructor(props: Props) {
    super(props);
  }
}

export default Graph;