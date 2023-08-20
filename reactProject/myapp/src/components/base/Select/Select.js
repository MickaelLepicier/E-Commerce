import './Select.scss';

export const Select = (props) => {
    const { options = [], firstOption } = props;

    function onChange(ev) {
        props.onChange(ev.target.value);
    }

    function renderOption(option) {
        if (option.name) {
            const { id, name } = option;
          
            return (
                <option key={id}  value={id}>
                    {name}
                </option>
            );
        }

        if (option.fname) {
            const { id, fname, lname } = option;

            return (
                <option key={id} value={id}>
                    {fname} {lname}
                </option>
            );
        }

        if (option.date) {
            const { id, customerId, productId, date } = option;

            return (
                <option key={id} value={id}>
                    {date}
                </option>
            );
        }
        return null;
    }

    function renderOptions() {
        return options.map((option) => renderOption(option));
    }

    return (
        <select onChange={onChange} className="Select-wrapper">
            <option value={''}> {firstOption}</option>
            {renderOptions()}
        </select>
    );
};
