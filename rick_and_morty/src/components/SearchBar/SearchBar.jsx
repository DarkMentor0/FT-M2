import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div>
         <input className={styles.input} type='search' />
         <button className={styles.input} onClick={onSearch}>Agregar</button>
      </div>
   );
}
