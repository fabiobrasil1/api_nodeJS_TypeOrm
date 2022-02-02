import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async(): Promise<Connection> => {
    const defaultOption = await getConnectionOptions()
    return await createConnection(
        Object.assign(defaultOption)
        
    )
    
}