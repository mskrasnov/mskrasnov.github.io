---
layout: default
---

# Проекты

Не думайте, что тут когда-нибудь появятся серьёзные хорошие вещи :)

## FSM

> <small>rust fluent linux systemd dbus iced</small>

FSM - простой системный профилировщик для Linux (аналог AIDA64/HWInfo/Hardinfo). Написан на Rust с применением `iced`. Пока нет поддержки бенчмарков, но активно думаю над добавлением некоторых из них.

> Ссылка на [GitHub-репозиторий](https://github.com/mskrasnov/FSM) | [сайт](ferrix/index.html)

<img src="https://mskrasnov.github.io/ferrix/screens/sysmon-new.png" width="75%">

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

> <small>rust iced wix linux windows</small>

Simple cross-platform worktime tracker. It periodically reminds users to take breaks while working on their computers.

![](https://timekeepersoft.github.io/assets/v1.1.0/main_win.png)

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

<img src="https://raw.githubusercontent.com/mskrasnov/resistor/refs/heads/master/data/screenshot_tui.png" width="75%">

> [GitHub репозиторий](https://github.com/mskrasnov/resistor)

**Стек технологий:**

- **Язык:** Rust;
- **TUI:** [`cursive`](https://github.com/gyscos/cursive) (бекенд: `ncurses` для Linux, `crossterm` для Windows);
- **Система:**
  - Windows;
  - Linux;
