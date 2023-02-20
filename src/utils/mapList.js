import { Link } from 'react-router-dom';

function mapList(data) {
    return (
        <div key={ data.id }>
            <h2>Name:
                <span>{ data.name }</span>
            </h2>
            <Link to={ `/product/${data.id}` }
                state={ data }
            >
                <p>Go to product</p>
            </Link>
        </div>
    )
}

export default mapList;