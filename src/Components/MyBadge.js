import Badge from 'react-bootstrap/Badge';

function MyBadge({stringa, colore}) {
    return (
        <div>
            <h2>
                <Badge bg={colore}>{stringa}</Badge>
            </h2>

        </div>
    );
}

export default MyBadge;
