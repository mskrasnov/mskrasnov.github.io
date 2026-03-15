---
layout: default
---

# Проекты

Не думайте, что тут когда-нибудь появятся серьёзные хорошие вещи :)

## FSM

<small>rust fluent linux systemd dbus iced</small>

FSM - простой системный профилировщик для Linux (аналог AIDA64/HWInfo/Hardinfo). Написан на Rust с применением `iced`. Пока нет поддержки бенчмарков, но активно думаю над добавлением некоторых из них.

> Ссылка на [GitHub-репозиторий](https://github.com/mskrasnov/FSM) | [сайт](ferrix/index.html)

<img src="https://mskrasnov.github.io/ferrix/screens/sysmon-new.png" width=75%>

**Стек технологий:**

- **Язык:** Rust;
- **i18n:** `fluent`;
- **GUI:** [`iced`](https://iced.rs);
- **Система:** Linux со следующим ПО:
  - `glibc`;
  - `systemd`;
  - `dbus`;

Программа умеет читать таблицы DMI, парсить основную информацию из EDID, а также выполнять другие действия. Подробную информацию о функционале см. на [сайте](./ferrix/index.html) программы.

## TimeKeeper

Simple cross-platform worktime tracker. It periodically reminds users to take breaks while working on their computers.

![](https://camo.githubusercontent.com/785cf3343addf8ea878314fb1880981d15bbd3fe221c1606701bfd8d40a9d5ef/68747470733a2f2f74696d656b6565706572736f66742e6769746875622e696f2f6173736574732f76302e332e302f6d61696e5f77696e2e706e67)

> Ссылка на [GitHub-репозиторий](https://github.com/TimeKeeperSoft/TimeKeeper)

**Стек технологий:**

- **Язык:** Rust, Python;
- **i18n:** `fluent`;
- **GUI:** `iced`;
- **Система:**
  - Linux;
  - Windows;
- **Установщик:** `wix` toolset;

## Linux for ARM (LFA)

LFA - руководство по сборке из исходного кода своего дистрибутива Linux для архитектуры ARM. Является вольным переводом руководства CLFS Embedded с различными дополнениями, взятыми из открытых источников.

> [Сайт](https://linux-for-arm.github.io/) | [Последняя стабильная версия](https://linux-for-arm.github.io/lfa/stable/index.html) | [Репозиторий GitHub](https://github.com/Linux-for-ARM/handbook)

## resistor

Программа для расчёта сопротивления резисторов по их цветовой маркировке.

<img src="https://raw.githubusercontent.com/mskrasnov/resistor/refs/heads/master/data/screenshot_tui.png" width=75%>

> [GitHub репозиторий](https://github.com/mskrasnov/resistor)

**Стек технологий:**

- **Язык:** Rust;
- **TUI:** [`cursive`](https://github.com/gyscos/cursive) (бекенд: `ncurses` для Linux, `crossterm` для Windows);
- **Система:**
  - Windows;
  - Linux;
