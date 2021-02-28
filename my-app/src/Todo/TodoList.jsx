const styles = {
    ul: {
        listStyle: 'none'
    }
}

export function TodoList ({cars}) {
    return (
        <ul style={styles.ul}>
            { cars.map((car, index) => <CarItem key={index} carName={car} altName={`просто машина ${car}`} needsBackground={car === 'mersedes'}/>)}
        </ul>
    )
}

export const CarItem = ({carName, altName, needsBackground}) => <li title={altName} style={{
    backgroundColor: needsBackground ? '#eee' : 'transparent'
}}>{carName}</li>

export const Header = ({userAuthorized}) => (
    <div>
        { userAuthorized && (
            <header>
                пользовательская шапка
            </header>
        )}
        ЭТО ШАПКА
    </div>
)