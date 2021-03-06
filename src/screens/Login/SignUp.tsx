import { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import CountryList from 'country-list';
import User from '../../context/User';
import BigButton from '../../components/BigButton/BigButton';
import styles from '../../styles/Login.module.scss';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState<Date | Date[]>(new Date());
  const [selectedCountry, setCountry] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(User);
  const history = useHistory();
  const [, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/users/sign-up`, {
        name: username,
        email,
        password,
        birthDate,
        country: selectedCountry,
      });

      setLoading(false);
      setUser?.(response.data);
      history.push('/player');
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data.error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
      >
        <input
          className={styles['spot-input']}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles['spot-input']}
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles['spot-input']}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h5 className={styles.subtitle}>Date of birth</h5>
        <DatePicker
          value={birthDate}
          onChange={(e: Date | Date[]) => setBirthDate(e)}
          className="datepicker"
        />
        <h5 className={styles.subtitle}>Country</h5>
        <select
          id="countries"
          className={styles['spot-input']}
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          onChange={(e) => setCountry(e.currentTarget.value)}
        >
          {CountryList.getNames().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <BigButton text="Sign up" loading={isLoading} />
      </form>
    </>
  );
};

export default SignUp;
