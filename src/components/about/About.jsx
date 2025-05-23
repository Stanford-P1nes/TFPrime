import React from "react";
import Contacts from "@/components/contacts/Contacts.jsx";
import "./about.scss";

export default function About() {
    return (
        <section className="section section_about">
            <div className="container">
                <div className="about_inner">
                    <blockquote className="about_author">
                        <div className="about_author__top_line">
                            <b>Автор:</b>
                            <b>Агаев Рамазан</b>
                        </div>
                        <div className="about_author__bottom_line">
                            <p className="about_autor__text">
                                Здравствуй путник, меня зовут Рамазан, я человек
                                который увлекается программированием в IT свере
                                Frontend-devilopment. Начал я изучение этой
                                сверы деятельности в недалеком 2023 году в июле.
                                До этого я изучал Python и знал я его уже на
                                базовом уровне. Как я пришёл во Frontend? Когда
                                я подрабатывал летом, потому что дома сидеть без
                                дела не хотел, хотел делать деньги и деньги, но
                                так делаются только "-время." На работе во мне
                                щёлкнула мысль заняться программированием,
                                потому что, а когда я займус этим, ведь я учусь
                                на программиста и ведь я выбрал эту профессию,
                                надо как-то начинать всё-таки. Подумал над
                                созданием сайтов, начал с Java. Да... было глупо
                                думать что Java это сокращение слова
                                JavaScript... Но учил я не долго, потому что
                                понял свою ошибку. Начал смотреть видеоролики,
                                с чего начать супер начинающему
                                веб-разработчику. Смотрел я разных ютуб-блогеров
                                и все они выкладывали полезный контент. Начал
                                естественно с HTML, далее CSS и уже JavaScript, и
                                всё это, конечно, постепенно. Вот HTML&CSS мне
                                училось не долго, в основном я практиковался по
                                большей части, что самое важное, а дальше в
                                плодь до самого 2025 года января - февраля
                                месяца я до сих пор ещё не опустил и продвигаюсь
                                дальше... Я знаю что мало знаю, но я готов к
                                дальнейшим трудностям и да, конечно, меня
                                преследовали мысли - "Это не моё. Нужно найти
                                своё истинное предназначение. Может я повар...",
                                и это естественно, обычно такое бывает если
                                переутомляешься. Работайте, но и отдыхать не
                                забывайте!
                            </p>
                        </div>
                    </blockquote>
                    <aside className="about_saide">
                        <Contacts />
                    </aside>
                </div>
            </div>
        </section>
    );
}
