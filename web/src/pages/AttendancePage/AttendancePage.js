import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
// Import German language
import 'dayjs/locale/vi'
import { DatePicker } from '@mantine/dates'
import { Container, Indicator } from '@mantine/core'
import { CheckboxGroup, Checkbox, Space, Select } from '@mantine/core'
import { Calendar, ChevronDown } from 'tabler-icons-react'
import { useState } from 'react'

const AttendancePage = () => {
  const [value, onChange] = useState(new Date())

  return (
    <>
      <MetaTags title="Điểm danh" description="Điểm danh" />

      <Container size="xs" px="xs">
        <h1>Điểm danh</h1>
        <DatePicker
          locale="vi"
          placeholder="Chọn ngày"
          label="Chọn ngày"
          value={value}
          onChange={onChange}
          // defaultValue={new Date()}
          firstDayOfWeek="sunday"
          inputFormat="DD/MM/YYYY"
          labelFormat="DD/MM/YYYY"
          icon={<Calendar size={18} />}
          renderDay={(date) => {
            const day = date.getDate()
            return (
              <Indicator
                position="bottom-center"
                size={6}
                color="red"
                offset={8}
                disabled={day !== 16}
              >
                <div>{day}</div>
              </Indicator>
            )
          }}
          required
        />
        <Space h="sm" />
        <Select
          placeholder="Hoạt động"
          allowDeselect
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          rightSection={<ChevronDown size={14} />}
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          variant="filled"
          data={[
            { value: '1', label: 'Nhóm Thanh Niên', disabled: true },
            { value: '2', label: 'Học Kinh Thánh' },
            { value: '3', label: 'Thăm Viếng' },
            { value: '4', label: 'Tập Hát' },
          ]}
        />
        <Space h="sm" />

        <CheckboxGroup orientation="vertical" required>
          <Checkbox value="0" label="Nguyễn Văn A" />
          <Checkbox value="1" label="Nguyễn Văn B" />
          <Checkbox value="2" label="Nguyễn Văn C" />
          <Checkbox value="3" label="Nguyễn Văn D" />
        </CheckboxGroup>
      </Container>

      {/* <p>
        Find me in <code>./web/src/pages/AttendancePage/AttendancePage.js</code>
      </p>
      <p>
        My default route is named <code>attendance</code>, link to me with `
        <Link to={routes.attendance()}>Attendance</Link>`
      </p> */}
    </>
  )
}

export default AttendancePage
