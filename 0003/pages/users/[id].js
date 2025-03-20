import styles from '../userDetail.module.css';

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

const UserDetail = ({ user }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{user.name}</h1>
            <p className={styles.detail}>Email: {user.email}</p>
            <p className={styles.detail}>Phone: {user.phone}</p>
            <p className={styles.detail}>Website: {user.website}</p>
        </div>
    );
};

export default UserDetail;