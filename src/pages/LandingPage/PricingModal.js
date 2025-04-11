import { ButtonClose, CloseModal, Content, CountdownModal, CountDownSegment, ModalContDown } from '@/components/landingPage.js/PricingModal'
import React, { useEffect, useState } from 'react'

const PricingModal = ({ setCloseCountDown }) => {
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    };
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const targetDate = new Date('2025-06-20T23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days < 10 ? '0' + days : days.toString(),
                hours: hours < 10 ? '0' + hours : hours.toString(),
                minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
                seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <CountdownModal>
            <Content>
                <CloseModal onClick={() => setCloseCountDown(false)}>&times;</CloseModal>
                <h3>Limited Time Offer!</h3>
                <p>This special pricing ends on June 21, 2025</p>
                <ModalContDown>
                    <CountDownSegment>
                        <span id="modal-days">{timeLeft.days}</span>
                        <small>Days</small>
                    </CountDownSegment>
                    <CountDownSegment>
                        <span id="modal-hours">{timeLeft.hours}</span>
                        <small>Hours</small>
                    </CountDownSegment>
                    <CountDownSegment>
                        <span id="modal-minutes">{timeLeft.minutes}</span>
                        <small>Minutes</small>
                    </CountDownSegment>
                    <CountDownSegment>
                        <span id="modal-seconds">{timeLeft.seconds}</span>
                        <small>Seconds</small>
                    </CountDownSegment>
                </ModalContDown>
                <p>Get 20% off all annual plans when you sign up before the deadline!</p>
                <ButtonClose onClick={() => setCloseCountDown(false)}>Claim Offer Now</ButtonClose>
            </Content>
        </CountdownModal>
    )
}

export default PricingModal
