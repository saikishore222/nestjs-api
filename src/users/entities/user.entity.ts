import { Entity, Column, PrimaryGeneratedColumn ,CreateDateColumn,OneToMany} from 'typeorm';
import { WalletAddress } from 'src/wallet-address/entities/wallet-address.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
   id: number;

  @Column({unique:true})
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}