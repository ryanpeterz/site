import styles from './hashtag.module.css';

export default function hashtag(text: string){
  return <p key={text} className={styles.hashTag}>{"#"+text}</p>
}