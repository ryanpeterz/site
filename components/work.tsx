
import { useState, useEffect } from 'react';
import styles from './work.module.css';
import hashtag from './hashtag';

export interface Props {
  place: string;
  title: string;
  start: Date;
  end: Date;
  desc: string;
  details: Array<string>;
  tags: Array<string>;
}

export default function Work(props: Props){
  const [state, setState] = useState({open: false})

  const onMouseEnter = () => {
    setState({open: true});
  }
  const onMouseLeave = () => {
    setState({open: false});
  }

  return (
      <div className={styles.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.cardTitleLine}>
          <div className={styles.cardTitleText}>{props.title}</div>
          <div style={{margin: "4px"}}> @ </div>
          <div className={styles.cardTitleText}>{props.place}</div>
        </div>
        <p className={styles.cardSubtitle}>
          {props.start.getFullYear() + "." + String(props.start.getMonth()+1).padStart(2, "0")
          + " -> " +
          props.end.getFullYear() + "." + String(props.end.getMonth()+1).padStart(2, "0")}</p>
        <div style={{width: "fit-content"}}>
          <p className={styles.cardBody} hidden={!state.open}>{props.desc}</p>
        </div>
        <div className={styles.detail}>{props.details.join(' ')}</div>
        <div className={styles.hashTagContainer}>
          {props.tags.map(tag => hashtag(tag))}
        </div>
      </div>
  );
}