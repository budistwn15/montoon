import InputLabel from "@/Components/InputLabel.jsx";
import {Input} from "postcss";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import { useEffect } from 'react';

export default function register(){

    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return  () => {
            reset('password','password_confirmation');
        };
    },[]);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    }

    return (<>
            <Head title="Sign Up"/>
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                         className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt=""/>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br/>
                                the better insight for your life
                            </p>
                        </div>
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel htmlFor="nama" value="Full Name"/>
                                    <TextInput
                                        id="nama"
                                        type="text"
                                        name="name"
                                        placeholder="Your fullname..."
                                        value={data.name}
                                        autoComplete={'name'}
                                        isFocused={true}
                                        handleChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2"/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value="Email"/>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your email address..."
                                        value={data.email}
                                        autoComplete={'username'}
                                        handleChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2"/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value="Password"/>
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Your password..."
                                        id="password"
                                        value={data.password}
                                        autoComplete={'new-password'}
                                        handleChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2"/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="password_confirmation" value="Password"/>
                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Your password..."
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete={'new-password'}
                                        handleChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2"/>
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type="submit" disabled={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </PrimaryButton>
                                <Link href={route('prototype.login')}>
                                    <SecondaryButton>
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                    </SecondaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>);
}
