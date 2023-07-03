import { createServer } from 'http'
import cluster from 'cluster';
import { cpus } from 'os';
import { parseArguments } from './utils/parseArguments';
import 'dotenv/config'

const PORT = process.env.PORT || 4000;
const args = parseArguments();

// export const app = createServer();

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

