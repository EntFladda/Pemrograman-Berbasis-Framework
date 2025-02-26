import Link from 'next/link';
import styles from './users.module.css';

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

const Users = ({ users }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Users List</h1>
            <ul className={styles.list}>
                {users.map((user) => (
                    <li key={user.id} className={styles.listItem}>
                        <Link href={`/users/${user.id}`} legacyBehavior>
                            <a className={styles.link}>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;